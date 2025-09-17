import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity>
      <Ionicons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#fff",
        elevation: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Header
