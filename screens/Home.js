import React from "react"
import { Text, View } from "react-native"
import Header from "../components/Header"
import HomeTopTab from "../components/HomeTopTab"

export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeTopTab {...props} />
        </View>
    )
}