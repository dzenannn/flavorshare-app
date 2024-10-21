"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

//* Sve funkcije koje budu korišćene u ovoj komponenti će biti tretirane kao serverske akcije.

function isInvalid(text) {
  return !text || text.trim() === "";
}

export default async function submitMeal(prevState, formData) {
  //! Ovaj tip funkcija radi samo na server-side komponentama.
  // "use server"; //? this creates server action (func that only executes on a server)

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout"); // "revalidate cache that belongs to the X path"
  //!by default only ↑ path will be revalidated, no nested paths!!
  //* sa 'layout'-om kao drugim argumentom, revalidacija se vrši i kod nested pathova
  redirect("/meals");
}
