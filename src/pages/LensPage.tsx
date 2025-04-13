"use client"

import styled from 'styled-components'
import { useRef, useState, useEffect } from "react"
import { StatusBar } from "../components/StatusBar"
import { ChevronLeft, X, History, MoreHorizontal, Zap, Search, Globe, GraduationCap } from 'lucide-react'

interface LensPageProps {
  onBack: () => void
  onResultFound?: () => void
}

const PageContainer = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const LensHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 10;
  gap: 16px;
`

const HeaderButton = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`

const LensTitle = styled.div`
  flex: 1;
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`

const CameraContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const Video = styled.video<{ hidden?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${props => props.hidden ? 'none' : 'block'};
`

const Canvas = styled.canvas<{ isThumbnail?: boolean }>`
  ${props => props.isThumbnail ? `
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 8px;
  ` : `
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  `}
`

const PermissionError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`

const LensControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 84px;
  left: 0;
  right: 0;
  z-index: 10;
`

const ThumbnailContainer = styled.div`
  width: 48px;
  height: 48px;
`

const ThumbnailButton = styled.button<{ isEmpty?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  ${props => props.isEmpty && `
    border: 1px dashed rgba(255, 255, 255, 0.3);
  `}
`

const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`

const ShutterButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ShutterButtonInner = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: white;
`

const Spacer = styled.div`
  width: 48px;
`

const LensActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background-color: rgba(32, 33, 36, 0.8);
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  z-index: 10;
`

const ActionButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  opacity: ${props => props.active ? 1 : 0.5};
  color: white;
`

const ActionIcon = styled.span`
  font-size: 18px;
`

const ActionText = styled.span`
  font-size: 14px;
`

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  background-color: white;
  border-radius: 100px;
  margin: 8px auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
`

export function LensPage({ onBack, onResultFound }: LensPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const [hasPhoto, setHasPhoto] = useState(false)
  const [flashOn, setFlashOn] = useState(false)
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null)
  const [activeMode, setActiveMode] = useState<'translate' | 'search' | 'homework'>('search')
  const [latestThumbnail, setLatestThumbnail] = useState<string | null>(null)

  // Initialize camera when component mounts
  useEffect(() => {
    let isComponentMounted = true;

    const startCamera = async () => {
      try {
        if (!isComponentMounted) return;

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false
        });
        
        if (!isComponentMounted) {
          // Component unmounted before we could use the stream
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        // Save stream to ref so we can stop it later
        mediaStreamRef.current = stream;
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraPermission(true);
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setCameraPermission(false);
      }
    };

    startCamera();

    // Cleanup function
    return () => {
      isComponentMounted = false;
      
      // Stop all media tracks
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
      }
    };
  }, []);

  // Function to stop camera
  const stopCamera = () => {
    // Stop all tracks in the stream
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }

    // Clear video source
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  // Handle back button click
  const handleBack = () => {
    stopCamera();
    onBack();
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const photo = document.createElement('canvas');
    photo.width = videoRef.current.videoWidth;
    photo.height = videoRef.current.videoHeight;
    const photoCtx = photo.getContext('2d');
    
    if (photoCtx) {
      photoCtx.drawImage(videoRef.current, 0, 0);
      setLatestThumbnail(photo.toDataURL('image/png'));
      setHasPhoto(true);
      
      // Trigger result found callback if provided
      if (onResultFound) {
        stopCamera();
        onResultFound();
      }
    }
  };

  const clearPhoto = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasPhoto(false);
    }
  };

  const toggleFlash = () => {
    setFlashOn(!flashOn);
    // In a real app, you would control the device flash here
  };

  return (
    <PageContainer>
      <StatusBar time="18:57" batteryLevel={37} />
      
      <CameraContainer>
        {cameraPermission === false && (
          <PermissionError>
            <p>Camera access denied</p>
            <p>Please enable camera permissions to use Google Lens</p>
          </PermissionError>
        )}
        
        <Video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          hidden={hasPhoto}
        />
        
        <Canvas 
          ref={canvasRef} 
          hidden={!hasPhoto}
        />
      </CameraContainer>
      
      <LensHeader>
        <HeaderButton onClick={handleBack}>
          <ChevronLeft size={20} color="white" />
        </HeaderButton>
        <HeaderButton active={flashOn} onClick={toggleFlash}>
          <Zap size={20} color="white" />
        </HeaderButton>
        <LensTitle>Google Lens</LensTitle>
        <HeaderButton>
          <History size={20} color="white" />
        </HeaderButton>
        <HeaderButton>
          <MoreHorizontal size={20} color="white" />
        </HeaderButton>
      </LensHeader>
      
      <LensControls>
        <ThumbnailContainer>
          {hasPhoto && (
            <ThumbnailButton onClick={clearPhoto}>
              <Canvas ref={canvasRef} isThumbnail />
            </ThumbnailButton>
          )}
          {!hasPhoto && (
            <ThumbnailButton isEmpty>
              <ThumbnailPlaceholder />
            </ThumbnailButton>
          )}
        </ThumbnailContainer>
        
        <ShutterButton onClick={takePhoto}>
          <ShutterButtonInner />
        </ShutterButton>
        
        <Spacer />
      </LensControls>
      
      <LensActions>
        <ActionButton 
          active={activeMode === 'translate'}
          onClick={() => setActiveMode('translate')}
        >
          <ActionIcon>
            <Globe size={18} color="white" />
          </ActionIcon>
          <ActionText>Translate</ActionText>
        </ActionButton>
        
        <ActionButton 
          active={activeMode === 'search'}
          onClick={() => setActiveMode('search')}
        >
          <ActionIcon>
            <Search size={18} color="white" />
          </ActionIcon>
          <ActionText>Search</ActionText>
        </ActionButton>
        
        <ActionButton 
          active={activeMode === 'homework'}
          onClick={() => setActiveMode('homework')}
        >
          <ActionIcon>
            <GraduationCap size={18} color="white" />
          </ActionIcon>
          <ActionText>Homework</ActionText>
        </ActionButton>
      </LensActions>
      
      <HomeIndicator />
    </PageContainer>
  );
}
