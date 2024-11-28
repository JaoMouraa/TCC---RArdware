import React, { useEffect, useState } from 'react';
import AppNavigator from './components/src/Navigation/AppNavigator';
import SplashScreenComponent from './components/src/Screens/SplashScreen'; 
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSplashReady, setIsSplashReady] = useState(false);

  useEffect(() => {
    
    const prepareSplash = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        setIsSplashReady(true); 
        SplashScreen.hideAsync();
      }, 8000); 
    };

    prepareSplash();
  }, []);

  if (!isSplashReady) {
    return <SplashScreenComponent />; 
  }

  return <AppNavigator />;
}
