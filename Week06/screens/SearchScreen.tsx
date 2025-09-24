import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa tìm kiếm..."
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
