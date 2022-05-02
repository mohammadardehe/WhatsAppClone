import React from "react"
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const ContactList = [
    {
        id: 1,
        username: "Elon Musk",
        image: require("../assets/avatar.jpg"),
        time: "22:45"
    },
    {
        id: 2,
        username: " Mark Zuckerberg",
        image: require("../assets/avatar2.jpg"),
        time: "18:30"
    },
    {
        id: 3,
        username: "William Henry Gates",
        image: require("../assets/ifgkx715roof.jpeg"),
        time: "12:00"
    },
]

export default function Chat(props) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={ContactList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item, key }) => (
                        <TouchableOpacity activeOpacity={0.7} style={styles.contactList} onPress={() => props.navigation.navigate("Room")}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={item.image} style={styles.userImage} />
                                <Text style={styles.usernameText}>{item.username}</Text>
                            </View>
                            <Text style={styles.noteText}>{item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>

            <TouchableOpacity activeOpacity={0.7} style={styles.contactBotton}>
                <Ionicons name="document-text-outline" size={32} color="#fff" />
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
    contactBotton: {
        width: 65,
        height: 65,
        borderRadius: 33,
        backgroundColor: "#128C7E",
        position: "absolute",
        bottom: 30,
        right: 20,
        alignItems: 'center',
        justifyContent: "center"
    },
    contactList: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: "cover"
    },
    usernameText: {
        fontSize: 14,
        color: "#000",
        marginLeft: 10
    },
    noteText: {
        fontSize: 12,
        color: "#636363",
    }
});