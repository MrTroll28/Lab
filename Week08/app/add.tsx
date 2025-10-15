import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

const API_URL = "https://67c81790c19eb8753e7c341f.mockapi.io/2441";

export default function AddJob() {
  const [job, setJob] = useState("");
  const router = useRouter();

  const handleAdd = async () => {
    if (!job.trim()) return;
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: job, done: false }),
    });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        placeholder="Input your job"
        style={styles.input}
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btnText}>FINISH →</Text>
      </TouchableOpacity>
      <Image
        source={require("./assets/note.png")}
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
