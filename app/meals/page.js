import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import pizzaImg from "../../public/images/pizza.jpg";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by Dženan</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid
          meals={[
            {
              id: "meal1",
              title: "Delicious Pizza",
              slug: "delicious-pizza",
              image: pizzaImg,
              summary:
                "A mouthwatering pasta dish with rich tomato sauce and fresh herbs.",
              creator: "Chef Antonio",
            },
            {
              id: "meal2",
              title: "Burger ",
              slug: "delicious-Burger",
              image: "/images/burger.jpg",
              summary:
                "A mouthwatering pasta dish with rich tomato sauce and fresh herbs.",
              creator: "Chef Antonio",
            },
            {
              id: "meal1",
              title: "Delicious Schnitzel",
              slug: "delicious-schnitzel",
              image: "/images/schnitzel.jpg",
              summary:
                "A mouthwatering pasta dish with rich tomato sauce and fresh herbs.",
              creator: "Chef Antonio",
            },
          ]}
        />
      </main>
    </>
  );
}
