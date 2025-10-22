import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useDatabase, addTaskAsync } from "../src/database";

export default function AddTask() {
  const [job, setJob] = useState("");
  const router = useRouter();
  const db = useDatabase();

  const handleAdd = async () => {
    if (!job.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập tên công việc!");
      return;
    }
    try {
      await addTaskAsync(db, job);
      setJob("");
      router.back();
    } catch (err) {
      console.error("Add task error:", err);
      Alert.alert("Lỗi", "Không thể thêm công việc. Vui lòng thử lại!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR TASK</Text>
      <TextInput
        placeholder="Input your task"
        style={styles.input}
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btnText}>FINISH →</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/note.png")}
        style={{ width: 150, height: 150, marginTop: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  input: { width: "80%", borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 20 },
  btn: { backgroundColor: "#00C2FF", padding: 12, borderRadius: 8 },
  btnText: { color: "#fff", fontWeight: "bold" },
});
