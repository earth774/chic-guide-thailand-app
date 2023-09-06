import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chicguide.appchicguide.thailand',
  appName: 'Chic Guide Thailand',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      iosClientId: '677267991762-alvvs25hefk5g7l63tku0k52d83bvqcu.apps.googleusercontent.com',
      androidClientId: '677267991762-agfqp6bamqmhni0djr4u83mjnj8su486.apps.googleusercontent.com',
      serverClientId: '677267991762-agfqp6bamqmhni0djr4u83mjnj8su486.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
