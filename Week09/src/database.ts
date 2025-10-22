import { useSQLiteContext, type SQLiteDatabase } from "expo-sqlite";

/** Tạo bảng nếu chưa có */
export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  const { user_version } = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );

  if (user_version >= DATABASE_VERSION) return;

  if (user_version === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER DEFAULT 0
      );
    `);
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

/** Hook truy cập DB */
export function useDatabase() {
  return useSQLiteContext();
}

/** CRUD */
export async function addTaskAsync(db: SQLiteDatabase, title: string) {
  if (!title.trim()) return;
  await db.runAsync("INSERT INTO tasks (title, completed) VALUES (?, ?);", [
    title,
    0,
  ]);
}

export async function getAllTasksAsync(db: SQLiteDatabase) {
  return await db.getAllAsync<{ id: number; title: string; completed: number }>(
    "SELECT * FROM tasks ORDER BY id DESC;"
  );
}

export async function toggleTaskAsync(
  db: SQLiteDatabase,
  id: number,
  completed: boolean
) {
  await db.runAsync("UPDATE tasks SET completed = ? WHERE id = ?;", [
    completed ? 1 : 0,
    id,
  ]);
}

export async function deleteTaskAsync(db: SQLiteDatabase, id: number) {
  await db.runAsync("DELETE FROM tasks WHERE id = ?;", [id]);
}
