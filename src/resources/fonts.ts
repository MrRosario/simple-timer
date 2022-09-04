import * as Font from "expo-font";

const fontsSetup = async () =>
  await Font.loadAsync({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-ExtraLight": require("../../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Thin": require("../../assets/fonts/Inter-Thin.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
  });

export default fontsSetup;