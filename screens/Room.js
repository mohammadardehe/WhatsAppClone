import React from "react"
import { Text, View } from "react-native"
import RoomHeader from "../components/RoomHeader"
import Message from "../components/Message"

export default function RoomScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <RoomHeader />
            <Message />
        </View>
    )
}