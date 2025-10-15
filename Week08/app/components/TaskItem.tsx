import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const API_URL = "https://67c81790c19eb8753e7c341f.mockapi.io/2441";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function TaskItem({ task, refresh }: { task: Task; refresh: (tasks: Task[]) => void }) {
  const toggleCompleted = async () => {
    await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    const res = await fetch(API_URL);
    refresh(await res.json());
  };

  const handleDelete = async () => {
    await fetch(`${API_URL}/${task.id}`, { method: "DELETE" });
    const res = await fetch(API_URL);
    refresh(await res.json());
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggleCompleted} style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome name={task.completed ? "check-square" : "square-o"} size={20} color="#00C2FF" />
        <Text style={[styles.text, task.completed && { textDecorationLine: "line-through" }]}>
          {task.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDelete}>
        <FontAwesome name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  text: { marginLeft: 10, fontSize: 16 },
});
