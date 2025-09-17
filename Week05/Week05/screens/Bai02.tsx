import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import HeaderSearch from "../components/HeaderSearch";
import Footer from "../components/Footer";
import ProductItemGrid from "../components/ProductItemGrid";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  start: number;
};

export default function ShopScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67c81790c19eb8753e7c341f.mockapi.io/2441")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

//   // lọc theo search
//   const filtered = products.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSearch search={search} setSearch={setSearch} />

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItemGrid item={item} />}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      )}

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
});
