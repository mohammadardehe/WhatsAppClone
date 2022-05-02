import React from "react"
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native"

export default function LoginScreen(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}>
            <Image source={require("../assets/logo.jpg")} style={styles.image} />
            <Text>Login to Account</Text>
            <TextInput
                placeholder="phone"
                keyboardType="phone-pad"
                placeholderTextColor={"#636363"}
                style={styles.textInput}
            />
            <TextInput
                placeholder="password"
                keyboardType="name-phone-pad"
                placeholderTextColor={"#636363"}
                style={styles.textInput}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.loginButton} onPress={()=>props.navigation.navigate("Home")}>
                <Text style={{ color: "#fff", fontSize: 15 }}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.registerText} onPress={()=>props.navigation.navigate("Register")}>don`t have account? <Text style={{ color: "#25D366" }}>create now</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        resizeMode: "cover"
    },
    textInput: {
        width: 320,
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 10,
        color: "#636363",
        fontSize: 14,
        marginTop: 25
    },
    loginButton: {
        width: 320,
        height: 50,
        backgroundColor: "#25D366",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 25
    },
    registerText: {
        position: "absolute",
        bottom: 15,
        fontSize: 14
    }
});