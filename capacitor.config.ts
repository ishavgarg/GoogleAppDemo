import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.googlelensdemo.app',
  appName: 'GoogleLensDemo',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#202124",
    },
  },
};

export default config;
