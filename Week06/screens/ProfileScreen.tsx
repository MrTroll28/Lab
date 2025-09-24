import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Đặng Khôi Nguyên</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 20, fontWeight: "bold" },
});
