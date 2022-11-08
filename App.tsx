import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { Routes } from "./src/routes/routes";
import { queryClient } from "./src/services/api/query-client";

export function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
