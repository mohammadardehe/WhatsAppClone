import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import HomeScreen from "../screens/Home"
import RoomScreen from "../screens/Room"
import LoginScreen from "../screens/Login"
import RegisterScreen from "../screens/Register"

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Room" component={RoomScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </>
    )
}