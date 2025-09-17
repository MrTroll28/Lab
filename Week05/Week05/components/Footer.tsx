import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    elevation: 8,
  },
});

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Ionicons name="menu" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="home" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="arrow-back-circle" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

export default Footer;