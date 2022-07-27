import "react-native-gesture-handler";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

import { Register } from "./src/pages/Register";
import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}
