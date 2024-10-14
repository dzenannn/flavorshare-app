import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(placeholder) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(placeholder);
  //! Value koji će biti umesto znaka pitanja se unosi unutar get metode, u ovom slučaju koristimo placeholder (slug).
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const randomChar = "ml"; //? Prevent overriding an existing img
  const extensionOfUploadedImg = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}-${randomChar}.${extensionOfUploadedImg}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Image saving failed!");
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
      (title,summary,instructions,creator,creator_email,image,slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )`
  ).run(meal);
}
