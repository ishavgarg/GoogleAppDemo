# Google Demo App

A React-based web application that simulates the Google Mobile App experience. This project recreates the UI and core functionality of Google, including audio search, visual search, and responsive design.

## Features

- 📱 Responsive mobile-first design
- 📷 Camera integration with photo capture
- 🔍 Visual search simulation
- 🌐 Translation mode 
- 🎓 Homework help mode
- 🔄 Multiple page navigation
- 👤 Account page simulation
- 🔊 Voice search interface

## Quick Start

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ishavgarg/googlelensdemo.git
   cd googlelensdemo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## Mobile Deployment with Capacitor

### Prerequisites
- For iOS: macOS with Xcode installed
- For Android: Android Studio with SDK tools

### Building for iOS

1. Build the web application:
   ```bash
   npm run build
   ```

2. Add iOS platform if not already added:
   ```bash
   npx cap add ios
   ```

3. Sync the web build with Capacitor:
   ```bash
   npx cap sync ios
   ```
4. Open the project in Xcode:
   ```bash
   npx cap open ios
   ```

5. In Xcode:
   - Select your development team
   - Set your bundle identifier
   - Connect your iOS device or select a simulator
   - Press the play button to build and run

### Building for Android

1. Build the web application:
   ```bash
   npm run build
   ```

2. Add Android platform if not already added:
   ```bash
   npx cap add android
   ```

3. Sync the web build with Capacitor:
   ```bash
   npx cap sync android
   ```

4. Open the project in Android Studio:
   ```bash
   npx cap open android
   ```

5. In Android Studio:
   - Connect your Android device or start an emulator
   - Click "Run" to build and install the app

### Updating Existing Apps

After making changes to your web app:

1. Rebuild the web application:
   ```bash
   npm run build
   ```

2. Sync changes with Capacitor:
   ```bash
   npx cap sync
   ```


## Project Structure

### Pages

- **LensPage**: Main camera interface with capture functionality
- **SearchPage**: Search interface with suggestions and history
- **VoicePage**: Voice search interface
- **AccountPage**: User account management simulation
- **SearchResultPage**: Displays results after searching with Lens

### Components

- **StatusBar**: Simulates mobile device status bar
- **TopBar**: Navigation bar for top of the screen
- **BottomNavigation**: Tab navigation
- **GoogleLogo**: Google branding component
- **SearchBar**: Text search interface
- **QuickActions**: Shortcut buttons for common actions
- **InfoCards**: Information cards displaying content
- **NewsCard**: News article preview cards

## Usage Guide

1. **Home Screen**: The main interface shows a Google search bar and quick actions
2. **Lens Camera**: Access the camera by clicking the lens icon, then:
   - Take a photo with the shutter button
   - Toggle flash with the lightning icon
   - Switch between translate, search, and homework modes
   - Review captured photos in the thumbnail area
3. **Voice Search**: Access by clicking the microphone icon
4. **Account**: Access by clicking the profile avatar

## Code Organization

This project uses:

- React with functional components and hooks
- styled-components for CSS-in-JS styling
- React Router for navigation
- Responsive design with media queries
- Audio access
- Camera access via the Web API

## Browser Compatibility

This demo works best in:
- Chrome (desktop and mobile)
- Safari on iOS 14.3+
- Edge (Chromium-based)

## License

[MIT License](LICENSE)



