import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Feather from "react-native-vector-icons/Feather"

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>WhatsApp</Text>
            <TouchableOpacity activeOpacity={0.7}>
                <Feather name="search" size={18} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: "#128C7E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    titleText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 17
    }
});