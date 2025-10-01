import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";

import bione from "../assets/bione.png";
import bitwo from "../assets/bitwo.png";
import bithree from "../assets/bithree.png";
import bifour from "../assets/bifour.png";

const imageMap = {
  bione,
  bitwo,
  bithree,
  bifour,
};

type Product = {
    id: string;
    name: string;
    image: any;
    price: number;
    description: string;
  // add other fields from your API if needed
};

export default function ProductScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://67c81790c19eb8753e7c341f.mockapi.io/products");
        const data = await res.json();

        const mapped = data.map((item: any) => ({
          ...item,
          image: imageMap[item.image as keyof typeof imageMap] || null,
        }));

        setProducts(mapped);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredData =
    category === "All"
      ? products
      : products.filter((item) => item.name.toLowerCase().includes(category.toLowerCase()));

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>The world’s Best Bike</Text>

      {/* Tabs */}
      <CategoryTabs
        categories={["All", "Roadbike", "Mountain"]}
        onSelect={(cat) => setCategory(cat)}
      />

      {/* Loading */}
      {loading ? (
        <ActivityIndicator size="large" color="crimson" />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => <ProductCard item={item} />}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "crimson",
    marginBottom: 16,
    textAlign: "center",
  },
});
