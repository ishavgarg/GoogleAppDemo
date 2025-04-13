/**
 * Image Processing Utilities
 * 
 * This file contains utility functions for processing images in the Google Lens feature.
 */

/**
 * Resize an image to a maximum width or height while maintaining aspect ratio
 * @param imageData The original image data URL
 * @param maxSize The maximum width or height
 * @returns Promise with the resized image data URL
 */
export const resizeImage = (imageData: string, maxSize: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height
        
        // Calculate new dimensions
        if (width > height && width > maxSize) {
          height = Math.round((height * maxSize) / width)
          width = maxSize
        } else if (height > maxSize) {
          width = Math.round((width * maxSize) / height)
          height = maxSize
        }
        
        canvas.width = width
        canvas.height = height
        
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('Could not get canvas context'))
          return
        }
        
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      }
      
      img.onerror = () => {
        reject(new Error('Failed to load image'))
      }
      
      img.src = imageData
    })
  }
  
  /**
   * Apply a visual effect to an image (e.g., brightness, contrast)
   * @param canvasElement The canvas element containing the image
   * @param effect The effect to apply ('brightness', 'contrast', etc.)
   * @param value The intensity of the effect (0-200, where 100 is normal)
   */
  export const applyImageEffect = (
    canvasElement: HTMLCanvasElement,
    effect: 'brightness' | 'contrast' | 'saturation',
    value: number
  ): void => {
    const ctx = canvasElement.getContext('2d')
    if (!ctx) return
    
    const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height)
    const data = imageData.data
    
    // Normalize value (0-200) to a factor
    const factor = value / 100
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      
      switch (effect) {
        case 'brightness':
          data[i] = Math.min(255, r * factor)
          data[i + 1] = Math.min(255, g * factor)
          data[i + 2] = Math.min(255, b * factor)
          break
          
        case 'contrast':
          const contrastFactor = (factor - 1) * 255
          data[i] = Math.min(255, Math.max(0, (r - 128) * factor + 128 + contrastFactor))
          data[i + 1] = Math.min(255, Math.max(0, (g - 128) * factor + 128 + contrastFactor))
          data[i + 2] = Math.min(255, Math.max(0, (b - 128) * factor + 128 + contrastFactor))
          break
          
        case 'saturation':
          const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b
          data[i] = Math.min(255, Math.max(0, gray + factor * (r - gray)))
          data[i + 1] = Math.min(255, Math.max(0, gray + factor * (g - gray)))
          data[i + 2] = Math.min(255, Math.max(0, gray + factor * (b - gray)))
          break
      }
    }
    
    ctx.putImageData(imageData, 0, 0)
  }
  
  /**
   * Extract text from an image using OCR (mock implementation)
   * @param imageData The image data URL
   * @returns Promise with the extracted text
   */
  export const extractTextFromImage = async (imageData: string): Promise<string> => {
    // In a real app, this would use a real OCR service or library
    // This is just a mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Sample extracted text from image")
      }, 1000)
    })
  }
  