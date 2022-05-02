import React from "react"
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TextInput } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Message() {
    return (
        <ImageBackground source={require("../assets/background.jpg")} style={{ flex: 1 }}>
            <ScrollView style={{ padding: 10 }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.7} style={styles.hostMessageBox}>
                    <Text style={styles.hostMessageText}>hi</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.guestMessageBox}>
                    <Text style={styles.guestMessageText}>hi elon</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.hostMessageBox}>
                    <Text style={styles.hostMessageText}>who are you??</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.guestMessageBox}>
                    <Text style={styles.guestMessageText}>fine</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                    placeholder="Message"
                    textContentType="name"
                    placeholderTextColor={"#636363"}
                    style={styles.textInput}
                />
                <TouchableOpacity activeOpacity={0.7} style={styles.sendBotton}>
                    <Ionicons name="md-send" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    hostMessageBox: {
        minWidth: 70,
        maxWidth: 250,
        minHeight: 30,
        borderRadius: 12,
        backgroundColor: "#25D366",
        paddingHorizontal: 8,
        justifyContent: "center",
        marginBottom: 20,
        alignSelf: "flex-end"
    },
    hostMessageText: {
        fontSize: 14,
        color: "#fff",
    },
    guestMessageBox: {
        width: 70,
        maxWidth: 250,
        minHeight: 30,
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        justifyContent: "center",
        marginBottom: 20
    },
    guestMessageText: {
        fontSize: 14,
        color: "#000",
    },
    footer: {
        width: "100%",
        height: 60,
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    textInput: {
        width: "85%",
        height: 45,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 24,
        paddingHorizontal: 20,
        textAlign: "left",
        color: "#636363",
        fontSize: 14
    },
    sendBotton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#128C7E",
        alignItems: 'center',
        justifyContent: "center"
    }
});