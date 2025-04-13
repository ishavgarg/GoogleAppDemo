/**
 * Camera Service
 * 
 * This service handles camera-related functionality for the Google Lens feature.
 * It provides methods for accessing the device camera, taking photos, and processing images.
 */

export class CameraService {
    /**
     * Request access to the device camera
     * @returns Promise with MediaStream if successful
     */
    static async requestCameraAccess(): Promise<MediaStream> {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false
        })
        return stream
      } catch (error) {
        console.error("Error accessing camera:", error)
        throw error
      }
    }
  
    /**
     * Stop all tracks in a media stream
     * @param stream The MediaStream to stop
     */
    static stopMediaStream(stream: MediaStream | null): void {
      if (!stream) return
      
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
    }
  
    /**
     * Capture a photo from a video element
     * @param videoElement The video element to capture from
     * @param canvasElement The canvas element to draw to
     * @returns The data URL of the captured image
     */
    static capturePhoto(videoElement: HTMLVideoElement, canvasElement: HTMLCanvasElement): string | null {
      if (!videoElement || !canvasElement) return null
      
      const width = videoElement.videoWidth
      const height = videoElement.videoHeight
      
      canvasElement.width = width
      canvasElement.height = height
      
      const ctx = canvasElement.getContext('2d')
      if (!ctx) return null
      
      ctx.drawImage(videoElement, 0, 0, width, height)
      return canvasElement.toDataURL('image/jpeg')
    }
  
    /**
     * Clear a canvas element
     * @param canvasElement The canvas element to clear
     */
    static clearCanvas(canvasElement: HTMLCanvasElement): void {
      const ctx = canvasElement.getContext('2d')
      if (!ctx) return
      
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    }
  
    /**
     * Toggle the device flash (torch mode)
     * @param stream The MediaStream to modify
     * @param enabled Whether to enable or disable the flash
     * @returns Promise that resolves when the operation is complete
     */
    static async toggleFlash(stream: MediaStream | null, enabled: boolean): Promise<boolean> {
      if (!stream) return false
      
      try {
        const track = stream.getVideoTracks()[0]
        if (!track) return false
        
        // Check if torch is supported
        const capabilities = track.getCapabilities()
        if (!('torch' in capabilities)) return false
        
        await track.applyConstraints({
          advanced: [{ torch: enabled } as any]
        })
        
        return true
      } catch (error) {
        console.error("Error toggling flash:", error)
        return false
      }
    }
  }
  