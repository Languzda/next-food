import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db", { verbose: console.log });

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  const sql = `SELECT * FROM meals`;
  return db.prepare(sql).all();
}

export async function getMeal(slug) {
  await new Promise((resolve) => setTimeout(resolve, 200)); // Simulate a delay

  const sql = `SELECT * FROM meals WHERE slug = ?`;
  return db.prepare(sql).get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const bufferedImage = await meal.image.arrayBuffer();

  fs.createWriteStream(`public/images/${filename}`).write(
    Buffer.from(bufferedImage),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully:", filename);
      }
    }
  );

  meal.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)`
  ).run(meal);
}
