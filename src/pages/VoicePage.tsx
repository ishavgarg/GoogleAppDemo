"use client"

import styled from 'styled-components'
import { StatusBar } from "../components/StatusBar"
import { ChevronLeft, Globe, Search } from "lucide-react"
import { useEffect, useState } from "react"

interface VoicePageProps {
  onBack: () => void
  onSearch?: () => void
}

// Type for the Web Speech API (not fully typed in all TypeScript environments)
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

// Create a type for our speech recognition object
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  onerror: (event: any) => void;
  onstart: () => void;
}

// Setup speech recognition with browser prefixes
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

// Get the speech recognition constructor from the browser
const SpeechRecognitionAPI = typeof window !== 'undefined' 
  ? (window.SpeechRecognition || window.webkitSpeechRecognition) 
  : null;

const PageContainer = styled.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const VoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

const HeaderButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`

const VoiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SpeakText = styled.div`
  color: var(--secondary-text);
  font-size: 32px;
  margin-bottom: 80px;
`

const TranscribedText = styled.div`
  color: white;
  font-size: 24px;
  max-width: 80%;
  text-align: center;
  margin-bottom: 30px;
`

const VoiceAnimation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
`

const AnimationDot = styled.div<{ height: number, colorIndex: number }>`
  width: 8px;
  border-radius: 4px;
  transition: height 0.15s ease;
  height: ${props => props.height}px;
  
  ${props => {
    switch (props.colorIndex) {
      case 0:
        return 'background-color: #4285F4;';
      case 1:
        return 'background-color: #EA4335;';
      case 2:
        return 'background-color: #FBBC05;';
      case 3:
        return 'background-color: #34A853;';
      default:
        return 'background-color: #4285F4;';
    }
  }}
`

const VoiceFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  margin-top: auto;
  gap: 16px;
`

const SongSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  color: var(--text-color);
  font-size: 16px;
`

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #4285F4;
  border: none;
  border-radius: 50%;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  background-color: white;
  border-radius: 100px;
  margin: 8px auto;
`

const ErrorMessage = styled.div`
  color: #EA4335;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  max-width: 80%;
`

export function VoicePage({ onBack, onSearch }: VoicePageProps) {
  const [dots, setDots] = useState<number[]>([5, 5, 5, 5])
  const [isListening, setIsListening] = useState(false)
  const [transcribedText, setTranscribedText] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    // Animation for the dots
    const interval = setInterval(() => {
      const newDots = Array.from({ length: 4 }, () => Math.floor(Math.random() * 20) + 5)
      setDots(newDots)
    }, 150)

    // Start speech recognition if available
    let recognition: SpeechRecognition | null = null;
    
    try {
      if (SpeechRecognitionAPI) {
        recognition = new SpeechRecognitionAPI() as SpeechRecognition;
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
          setIsListening(true);
          setError(null);
        };
        
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
          
          setTranscribedText(transcript);
          
          // If we have text, show the search button
          if (transcript.trim().length > 0) {
            setShowSearch(true);
          }
        };
        
        recognition.onend = () => {
          // Don't set isListening to false as we want to keep the animation
        };
        
        recognition.onerror = (event: any) => {
          setError(`Speech recognition error: ${event.error}`);
          setIsListening(false);
        };
        
        // Start the recognition
        recognition.start();
      } else {
        setError("Speech recognition not supported in this browser");
      }
    } catch (err) {
      setError("Error initializing speech recognition");
      console.error(err);
    }
    
    return () => {
      clearInterval(interval);
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <PageContainer>
      <StatusBar time="18:24" batteryLevel={41} />
      <VoiceHeader>
        <HeaderButton onClick={onBack}>
          <ChevronLeft size={24} color="white" />
        </HeaderButton>
        <HeaderButton>
          <Globe size={24} color="white" />
        </HeaderButton>
      </VoiceHeader>

      <VoiceContent>
        <SpeakText>Speak now</SpeakText>
        <VoiceAnimation>
          {dots.map((height, index) => (
            <AnimationDot 
              key={index} 
              height={height}
              colorIndex={index}
            />
          ))}
        </VoiceAnimation>
        
        {transcribedText && (
          <TranscribedText>{transcribedText}</TranscribedText>
        )}
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        {showSearch && (
          <SearchButton onClick={handleSearch}>
            <Search size={24} />
          </SearchButton>
        )}
      </VoiceContent>

      <VoiceFooter>
        <SongSearchButton>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z"
              fill="white"
            />
          </svg>
          <span>Search a song</span>
        </SongSearchButton>
      </VoiceFooter>

      <HomeIndicator />
    </PageContainer>
  );
}
