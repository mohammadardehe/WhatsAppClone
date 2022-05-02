import React from "react"
import { Text, View } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//tabs
import Chat from "./Chta";
import Status from "./Status";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTab(props) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#d9d9d9",
                tabBarLabelStyle: {
                    fontSize: 14
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#fff",
                    height: 3
                },
                tabBarIndicatorContainerStyle: {
                    backgroundColor: "#128C7E"
                }
            }}
        >
            <Tab.Screen name="Chat" component={Chat} {...props} />
            <Tab.Screen name="Status" component={Status} />
        </Tab.Navigator>
    )
}