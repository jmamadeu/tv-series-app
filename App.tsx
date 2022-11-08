import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { HomeScreen } from "./src/screens/home/home";
import { queryClient } from "./src/services/api/query-client";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
        <StatusBar style="light" />
      </QueryClientProvider>
    </>
  );
}
