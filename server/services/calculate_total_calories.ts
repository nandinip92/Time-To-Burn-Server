import { IngredientsNutrition } from "../types/nutrition.types";

//Function to calculate the total calories
export async function calculateTotalCalories(
  nutrition: IngredientsNutrition
): Promise<number> {
  const calories = nutrition.items.map((ingredient) => {
    if (ingredient) return ingredient.calories;
  });
  //console.log("Calories--->", calories);

  const totalCalories = calories.reduce(
    (accumulator, currenValue) =>
      (accumulator as number) + (currenValue as number)
  );
  return totalCalories as number;
}
