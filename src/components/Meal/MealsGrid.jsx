import MealItem from "./MealItem";
import classes from "./MealsGrid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.grid}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
