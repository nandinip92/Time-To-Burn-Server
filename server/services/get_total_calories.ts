import { Nutrition } from "../types/nutrition.types";
import { TotalCalories } from "../types/nutrition.types";

export interface NutritionResult {
  items: Nutrition[];
}

export const getTotalCalories = async (ingredientsInfo: NutritionResult) => {
  console.log("--->IngredientsInfo", ingredientsInfo);

  //   ingredientsInfo.items.forEach((item) => {
  //     console.log(item.calories);
  //   });

  for (const item in ingredientsInfo.items) {
    console.log(item.calories);
  }
};
