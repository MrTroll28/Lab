import React from "react";
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "../Context/FavoriteContext";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Bai04";

type Product = {
  id: string;
  name: string;
  shop: string;
  image: string;
};

export default function ProductsScreen() {
  const [data, setData] = React.useState<Product[]>([]);
  const { addToFavorites } = useFavorites();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://67c81790c19eb8753e7c341f.mockapi.io/products");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Lỗi fetch API:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={styles.item}>
          <TouchableOpacity
            style={{ flexDirection: "row", flex: 1 }}
            onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.shop}>{item.shop}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToFavorites(item)}>
            <Text style={{ color: "blue" }}>❤️</Text>
          </TouchableOpacity>
        </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  shop: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
});
