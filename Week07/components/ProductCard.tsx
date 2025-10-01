import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Product = {
    id: string;
    image: any;
    name: string;
    price: number;
    description: string;
};

type ProductCardProps = {
  item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      {/* Image */}
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Name */}
      <Text style={styles.name}>{item.name}</Text>
      
      {/* Price */}
      <Text style={styles.price}>$ {item.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 80,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "orangered",
  },
});
