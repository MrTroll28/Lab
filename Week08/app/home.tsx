import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import TaskItem from "./components/TaskItem";

const API_URL = "https://67c81790c19eb8753e7c341f.mockapi.io/2441";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function HomeScreen() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (Array.isArray(data)) setTasks(data);
      else setTasks([]);
    } catch (err) {
      console.error("Fetch error:", err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi {name || "User"}</Text>
      <Text style={styles.subHeader}>Have a great day ahead</Text>

      <TextInput
        placeholder="Search task..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#00C2FF" />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} refresh={setTasks} />
          )}
          refreshing={loading}
          onRefresh={fetchTasks}
        />
      )}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => router.push({ pathname: "/add" })}
      >
        <FontAwesome name="plus" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginTop: 40 },
  subHeader: { color: "gray", marginBottom: 20 },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  addBtn: {
    backgroundColor: "#00C2FF",
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
