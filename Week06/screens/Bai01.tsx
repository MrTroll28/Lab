import React, { useEffect, useState } from "react";
import { View, Modal, StyleSheet, ActivityIndicator } from "react-native";
import ProductCard from "../components/ProductCard";
import ColorPicker from "../components/ColorPicker";

export default function Bai01() {
  const [product, setProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [showPicker, setShowPicker] = useState(false);

  const images: Record<string, any> = {
    black: require("../assets/vs_black.png"),
    blue: require("../assets/vs_blue.png"),
    red: require("../assets/vs_red.png"),
    silver: require("../assets/vs_silver.png"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://67c81790c19eb8753e7c341f.mockapi.io/2441"
        );
        const data = await res.json();
        setProduct(data);
        if (Array.isArray(data.colors) && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
      } catch (e) {
        console.error("Lỗi fetch API:", e);
      }
    };
    fetchData();
  }, []);

  if (!product) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <ProductCard
        image={images.black}
        title={product.title}
        rating={product.rating}
        reviews={product.reviews}
        price={product.price}
        oldPrice={product.oldPrice}
        onChooseColor={() => setShowPicker(true)}
        onBuy={() => alert("Đã chọn mua")}
      />

      <Modal visible={showPicker} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ColorPicker
              onSelect={(color) => {
                setSelectedColor(color);
                setShowPicker(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
});
