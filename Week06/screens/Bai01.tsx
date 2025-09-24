import React, { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import ColorPicker from "../components/ColorPicker";

export default function Bai01() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [showPicker, setShowPicker] = useState(false);

  const images: Record<string, any> = {
    black: require("../assets/vs_black.png"),
    blue: require("../assets/vs_blue.png"),
    red: require("../assets/vs_red.png"),
    silver: require("../assets/vs_silver.png"),
  };

  return (
    <View style={styles.container}>
      <ProductCard
        image={images[selectedColor]}
        title="Điện Thoại Vsmart Joy 3 - Hàng chính hãng"
        rating={4.5}
        reviews={828}
        price="1.790.000 ₫"
        oldPrice="1.990.000 ₫"
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
