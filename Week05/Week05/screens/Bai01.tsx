import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

type Product = {
  id: string;
  name: string;
  image: string;
  shop: string;
};

export default function ShopScreen() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        const url = "https://67c81790c19eb8753e7c341f.mockapi.io/products";
        fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error(error));
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Danh sách sản phẩm" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});
