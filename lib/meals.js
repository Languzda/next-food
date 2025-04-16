import sql from "better-sqlite3";

const db = sql("meals.db", { verbose: console.log });

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  const sql = `SELECT * FROM meals`;
  return db.prepare(sql).all();
}
