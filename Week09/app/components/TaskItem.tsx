import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { toggleTaskAsync, deleteTaskAsync, useDatabase } from "../../src/database";

interface Task {
  id: number;
  title: string;
  completed: number;
}

export default function TaskItem({
  task,
  refresh,
}: {
  task: Task;
  refresh: () => Promise<void>;
}) {
  const db = useDatabase();

  const toggleCompleted = async () => {
    await toggleTaskAsync(db, task.id, !task.completed);
    await refresh();
  };

  const handleDelete = async () => {
    await deleteTaskAsync(db, task.id);
    await refresh();
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggleCompleted} style={styles.left}>
        <FontAwesome
          name={task.completed ? "check-square" : "square-o"}
          size={22}
          color="#00C2FF"
        />
        <Text
          style={[
            styles.text,
            task.completed ? { textDecorationLine: "line-through", color: "gray" } : null,
          ]}
        >
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
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  left: { flexDirection: "row", alignItems: "center" },
  text: { marginLeft: 10, fontSize: 16 },
});
