import { StatusBar } from "expo-status-bar";
import React from "react";
import { HomeScreen } from "./src/screens/home/home";

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="light" />
    </>
  );
}
