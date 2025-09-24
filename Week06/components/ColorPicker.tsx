import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface ColorPickerProps {
  onSelect: (color: string) => void;
}

export default function ColorPicker({ onSelect }: ColorPickerProps) {
  const colors = ["black", "blue", "red", "silver"];

  return (
    <View style={styles.container}>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.circle, { backgroundColor: color }]}
          onPress={() => onSelect(color)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
  },
});
