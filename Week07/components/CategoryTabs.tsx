import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type CategoryTabsProps = {
  categories: string[];
  onSelect: (category: string) => void;
};

export default function CategoryTabs({ categories, onSelect }: CategoryTabsProps) {
  const [active, setActive] = useState("All");

  const handlePress = (category: string) => {
    setActive(category);
    onSelect(category);
  };

  return (
    <View style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.tab,
            active === cat && styles.activeTab,
          ]}
          onPress={() => handlePress(cat)}
        >
          <Text
            style={[
              styles.tabText,
              active === cat && styles.activeTabText,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  tab: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  activeTab: {
    borderColor: "green",
    backgroundColor: "#e9ffe9",
  },
  tabText: {
    fontSize: 14,
    color: "#888",
  },
  activeTabText: {
    color: "green",
    fontWeight: "bold",
  },
});
