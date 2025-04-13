/**
 * Type definitions for the Google Lens Demo app
 */

// Navigation page types
export type PageType = "home" | "search" | "account" | "voice" | "lens"

// Google Lens modes
export type LensMode = "translate" | "search" | "homework"

// Camera permission status
export type CameraPermissionStatus = boolean | null

// Image capture result
export interface ImageCaptureResult {
  dataUrl: string
  width: number
  height: number
  timestamp: number
}

// Lens analysis result
export interface LensAnalysisResult {
  type: LensMode
  data: any
  confidence: number
}

// Status bar props
export interface StatusBarProps {
  time: string
  batteryLevel: number
}

// Navigation props
export interface NavigationProps {
  onBack: () => void
  onClose?: () => void
}
