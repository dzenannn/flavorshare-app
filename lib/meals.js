import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(placeholder) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(placeholder);
  //! Value koji će biti umesto znaka pitanja se unosi unutar get metode, u ovom slučaju koristimo placeholder (slug)
}
