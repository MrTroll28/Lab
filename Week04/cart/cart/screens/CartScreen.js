import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import CartItem from "../components/CartItem";
import DiscountCode from "../components/DiscountCode";
import CartSummary from "../components/CartSummary";
import img from "../assets/book.png"

export default function CartScreen() {
  const [item, setItem] = useState({
    id: "1",
    name: "Nguyên hàm tích phân và ứng dụng",
    supplier: "Tiki Trading",
    price: 141800,
    quantity: 1,
    image: img,
  });

  const increase = () => setItem({ ...item, quantity: item.quantity + 1 });
  const decrease = () =>
    setItem({ ...item, quantity: Math.max(1, item.quantity - 1) });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CartItem item={item} onIncrease={increase} onDecrease={decrease} />
      <DiscountCode />
      <CartSummary total={item.price * item.quantity} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
});
