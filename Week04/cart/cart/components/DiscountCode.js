import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DiscountCode() {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mã giảm giá"
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Áp dụng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    height: 40,
  },
  btn: {
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  btnText: { color: "#fff" },
});
