import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import bikeImage from "../assets/bione.png";
import { useNavigation } from "@react-navigation/native";

export default function Introduce() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      {/* Image */}
      <View style={styles.imageBox}>
        <Image
          source={bikeImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Shop Name */}
      <View style={styles.shopNameBox}>
        <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Products")}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
  },
  imageBox: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "100%",
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6b6b6ff",
  },
  image: {
    width: 280,
    height: 240,
  },
  shopNameBox: {
    marginBottom: 56,
    width: "100%",
    alignItems: "center",
  },
  shopName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    backgroundColor: "crimson",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
