import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

type Product = {
  name: string;
  price: string;
  description: string;
  image: any;
};

type ProductDetailRoute = {
  params: {
    product: Product;
  };
};

export default function ProductDetail({ route }: { route: ProductDetailRoute }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image */}
      <View style={styles.imageBox}>
        <Image source={product.image} style={styles.image} resizeMode="contain" />
      </View>

      {/* Name */}
      <Text style={styles.name}>{product.name}</Text>

      {/* Discount + Price */}
      <View style={styles.priceRow}>
        <Text style={styles.discount}>15% OFF ${parseFloat(product.price) * 1.15}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      {/* Description */}
      <Text style={styles.desc}>{product.description}</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageBox: {
    backgroundColor: "#f2bdbdff",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 220,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  image: {
    width: 220,
    height: 180,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
  discount: {
    color: "green",
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "crimson",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
