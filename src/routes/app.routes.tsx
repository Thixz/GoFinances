import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { Resume } from "../pages/Resume";

export function AppRouter() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 50,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="attach-money"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="pie-chart"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}