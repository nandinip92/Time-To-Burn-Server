import { IngredientsNutrition, Nutrition } from "../types/nutrition.types";
import { TotalCalories } from "../types/nutrition.types";

const getCalories = (ingredient: Nutrition) => {
  const calories = Object.entries(ingredient)
    .filter(([key, value]) => key === "calories")
    .pop();
  //console.log("--->Inside getCalories", calories);
  return calories;
};

export async function getTotalCalories(
  nutrition: IngredientsNutrition
): Promise<TotalCalories> {
  const calories = nutrition.items.map((ingredient) => getCalories(ingredient));

  const total_calories = calories
    .map((x) => {
      if (x) return x[1];
    })
    .reduce(
      (accumulator, currenValue) =>
        (accumulator as number) + (currenValue as number)
    );

  //console.log("total_calories--->", total_calories);
  const result: TotalCalories = {
    items: nutrition.items,
    total_calories: total_calories as number,
  };
  return result;
}
