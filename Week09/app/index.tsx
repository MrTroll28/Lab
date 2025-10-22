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
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import TaskItem from "./components/TaskItem";
import { useDatabase, getAllTasksAsync } from "../src/database";

interface Task {
  id: number;
  title: string;
  completed: number;
}

export default function HomeScreen() {
  const router = useRouter();
  const db = useDatabase();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getAllTasksAsync(db);
      setTasks(data);
    } catch (err) {
      console.error("SQLite fetch error:", err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [db]);

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>
      <Text style={styles.subHeader}>Stay productive today ✨</Text>

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
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem task={item} refresh={fetchTasks} />
          )}
          refreshing={loading}
          onRefresh={fetchTasks}
          ListEmptyComponent={
            <Text style={styles.empty}>No tasks yet.</Text>
          }
        />
      )}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => router.push("/add")}
      >
        <FontAwesome name="plus" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginTop: 40 },
  subHeader: { color: "gray", marginBottom: 20 },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  empty: { textAlign: "center", marginTop: 30, color: "gray" },
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
