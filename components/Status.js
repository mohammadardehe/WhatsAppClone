import React from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function Status() {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.statusBox}>
                <Image source={require("../assets/avatar.jpg")} style={styles.image} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.titleText}>My Status</Text>
                    <Text style={styles.noteText}>Tap to add status</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff"
    },
    statusBox: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: "cover"
    },
    titleText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000"
    },
    noteText: {
        fontSize: 13,
        marginTop: 10
    }
});