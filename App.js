import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, View, StatusBar } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { HomeScreen } from './src/ui/Home';
import fontsSetup from './src/resources/fonts';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fontsSetup();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, backgroundColor: "#000" }} onLayout={onLayoutRootView}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});