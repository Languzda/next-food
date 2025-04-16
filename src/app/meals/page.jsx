import MealsGrid from "@/src/components/Meal/MealsGrid";
import classes from "./page.module.css";
import Link from "next/link";
import { getAllMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getAllMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose you favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
