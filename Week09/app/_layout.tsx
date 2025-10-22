import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { migrateDbIfNeeded } from "../src/database";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="tasks.db" onInit={migrateDbIfNeeded}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="add" />
      </Stack>
    </SQLiteProvider>
  );
}
