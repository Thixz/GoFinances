import "react-native-gesture-handler";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from "react";
import { StatusBar } from "react-native";
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

import { Routes } from "./src/routes";
import { AppRouter } from "./src/routes/app.routes";

import { SigIn } from "./src/pages/SigIn";

import { AuthProvider, useAuth } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const {userStorageLoading} = useAuth()

  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle={'light-content'}/>
        <AuthProvider>
        <Routes />
        </AuthProvider>
    </ThemeProvider>
  );
}
