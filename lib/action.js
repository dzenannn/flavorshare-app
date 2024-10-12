"use server"; //* Sve funkcije koje budu korišćene u ovoj komponenti će biti tretirane kao serverske akcije.

export default async function submitMeal(formData) {
  //! Ovaj tip funkcija radi samo na server-side komponentama.
  //   "use server"; //? this creates server action (func that only executes on a server)

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
  };

  console.log(meal);
}
