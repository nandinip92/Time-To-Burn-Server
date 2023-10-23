import { IngredientsNutrition } from "../types/nutrition.types";

//Function to calculate the total calories
export async function calculateTotalCalories(
  nutrition: IngredientsNutrition
): Promise<number> {
  const calories = nutrition.items.map((ingredient) => {
    if (ingredient) return ingredient.calories;
  });
  //console.log("Calories--->", calories);

  const total_calories = calories.reduce(
    (accumulator, currenValue) =>
      (accumulator as number) + (currenValue as number)
  );
  return total_calories as number;
}
