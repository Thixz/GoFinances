import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRouter } from "./auth.routes";
import { AppRouter } from "./app.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
     {user.id ? <AppRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
}
