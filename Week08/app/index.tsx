import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function StartScreen() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push({ pathname: "/home", params: { name } })}
      >
        <Text style={styles.btnText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", color: "#7B61FF", marginBottom: 20 },
  input: { width: "80%", borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 20 },
  btn: { backgroundColor: "#00C2FF", padding: 12, borderRadius: 8 },
  btnText: { color: "#fff", fontWeight: "bold" },
});
