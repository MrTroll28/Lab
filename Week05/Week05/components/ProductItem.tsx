import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Product = {
  id: string;
  name: string;
  image: string;
  shop: string;
};

const ProductItem = ({ item }: { item: Product }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />

    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productShop}>{item.shop}</Text>
    </View>

    <TouchableOpacity style={styles.chatButton}>
      <Ionicons name="chatbubble-ellipses-outline" size={20} color="white" />
      <Text style={{ color: "white", marginLeft: 5 }}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    },
    productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    },
    productName: {
    fontSize: 16,
    fontWeight: "600",
    },
    productShop: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
    },
    chatButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    },
});

export default ProductItem;