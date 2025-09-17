import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  total: number;
};

const CartSummary: React.FC<Props> = ({ total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Tạm tính</Text>
        <Text style={styles.bold}>{total.toLocaleString()} đ</Text>
      </View>
      <View style={[styles.row, styles.finalRow]}>
        <Text style={styles.finalText}>Thành tiền</Text>
        <Text style={styles.finalText}>{total.toLocaleString()} đ</Text>
      </View>
      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartSummary;

const styles = StyleSheet.create({
  container: { marginTop: 15, borderTopWidth: 1, borderTopColor: "#ddd", paddingTop: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 5 },
  bold: { fontWeight: "bold" },
  finalRow: { marginTop: 5 },
  finalText: { fontWeight: "bold", color: "red" },
  orderBtn: { backgroundColor: "red", padding: 12, alignItems: "center", marginTop: 10 },
  orderBtnText: { color: "#fff", fontWeight: "bold" },
});
