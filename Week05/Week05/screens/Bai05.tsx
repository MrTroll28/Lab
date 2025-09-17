import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

type ImageItem = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export default function GalleryApp() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [gridView, setGridView] = useState(false);

  useEffect(() => {
    const url = "https://67c81790c19eb8753e7c341f.mockapi.io/2441";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        {/* Danh sách Horizontal */}
        <FlatList
          data={images.slice(0, 5)}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.highlightItem}>
              <Image source={{ uri: item.image }} style={styles.highlightImg} />
              <Text style={styles.author}>{item.name}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 200 }}
        />

        {/* Nút chuyển chế độ */}
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[styles.switchBtn, !gridView && styles.switchActive]}
            onPress={() => setGridView(false)}
          >
            <Text style={styles.switchText}>List View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switchBtn, gridView && styles.switchActive]}
            onPress={() => setGridView(true)}
          >
            <Text style={styles.switchText}>Grid View</Text>
          </TouchableOpacity>
        </View>

        {/* Danh sách chính */}
        <FlatList
          data={images}
          key={gridView ? "grid" : "list"} // reset layout khi đổi chế độ
          numColumns={gridView ? 2 : 1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={gridView ? styles.gridItem : styles.listItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.author}>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={{ padding: 10 }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  desc: { textAlign: "center", marginBottom: 15, color: "#555" },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10, marginTop: 15 },

  highlightItem: {
    marginRight: 12,
    alignItems: "center",
  },
  highlightImg: { width: 120, height: 80, borderRadius: 10, marginBottom: 5 },

  author: { fontSize: 14, color: "#333", textAlign: "center" },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  switchBtn: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#747272ff",
  },
  switchActive: {
    backgroundColor: "#007bff",
  },
  switchText: { color: "#fff" },

  listItem: {
    marginBottom: 15,
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
});
