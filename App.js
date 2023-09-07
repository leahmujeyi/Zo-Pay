const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginPhone from "./screens/LoginPhone";
import SaRemovebgPreviewIcon from "./components/SaRemovebgPreviewIcon";
import BWEPS026001RemovebgPrevieIcon from "./components/BWEPS026001RemovebgPrevieIcon";
import KenyaRemovebgPreview1Icon from "./components/KenyaRemovebgPreview1Icon";
import ZamRemovebgPreview1Icon from "./components/ZamRemovebgPreview1Icon";
import Screenshot110RemovebgPrevieIcon from "./components/Screenshot110RemovebgPrevieIcon";
import AnglRemovebgPreviewIcon from "./components/AnglRemovebgPreviewIcon";
import NamRemovebgPreviewIcon from "./components/NamRemovebgPreviewIcon";
import Screenshot111RemovebgPrevieIcon from "./screens/Screenshot111RemovebgPrevieIcon";
import LoginCodePageloginverify from "./screens/LoginCodePageloginverify";
import HomeScreenMenutabs from "./screens/HomeScreenMenutabs";
import Menuslide from "./screens/Menuslide";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "PTSans-CaptionBold": require("./assets/fonts/PTSans-CaptionBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LoginPhone"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LoginPhone"
              component={LoginPhone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screenshot111RemovebgPreview1"
              component={Screenshot111RemovebgPrevieIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginCodePageloginverifyPhone"
              component={LoginCodePageloginverify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreenMenutabs"
              component={HomeScreenMenutabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menuslide"
              component={Menuslide}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
