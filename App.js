import React from "react"
import { StatusBar, I18nManager, LogBox } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./stacks/StackNavigator"

I18nManager.forceRTL(false)
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>

      <StatusBar barStyle="light-content" backgroundColor={"#128C7E"} />
    </>
  )
}