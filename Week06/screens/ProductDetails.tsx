import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./Bai04";

type ProductDetailsRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

type Product = {
  id: string;
  name: string;
  shop: string;
  image: string;
};

export default function ProductDetails() {
  const route = useRoute<ProductDetailsRouteProp>();
  const { id } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://67c81790c19eb8753e7c341f.mockapi.io/products/${id}`
        );
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        console.error("Lỗi fetch chi tiết:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (!product) return <Text style={{ flex: 1, textAlign: "center" }}>Không tìm thấy sản phẩm</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.shop}>{product.shop}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  shop: {
    fontSize: 16,
    color: "#6b7280",
  },
});
