import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  start: number;
};

const screenWidth = Dimensions.get("window").width;
const itemWidth = (screenWidth - 30) / 2; // 2 cột

export default function ProductItemGrid({ item }: { item: Product }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>

      <Text style={styles.price}>${item.price}</Text>

      <View style={styles.rating}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.starText}>{item.start}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: itemWidth,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 8,
    padding: 8,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E53935",
    marginTop: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  starText: {
    fontSize: 12,
    marginLeft: 4,
    color: "gray",
  },
});
