import React from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function RoomHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <Image source={require("../assets/avatar.jpg")} style={styles.image} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.titleText}>Elon Musk</Text>
                    <Text style={styles.noteText}>online</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity activeOpacity={0.7}>
                    <FontAwesome name="video-camera" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: 20, marginRight: 5 }}>
                    <FontAwesome name="phone" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#128C7E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    userInfoContainer: {
        flexDirection: "row"
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 23,
        resizeMode: "cover"
    },
    titleText: {
        fontSize: 14,
        color: "#fff"
    },
    noteText: {
        fontSize: 12,
        color: "#fff",
        marginTop: 3
    }
});