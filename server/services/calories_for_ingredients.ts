import {
  CaloriesDataType,
  CaloriesPerIngredient,
  IngredientsNutrition,
  Nutrition,
  TotalCaloriesWithNutirion,
} from "../types/nutrition.types";
import * as nutritionService from "./nutrition";

/*
 * Forlloeing funtion fetches the nutrition data from the API using 'nutritionService.getNutritionData'.
 * From this nutrition data only the ingredient name and its calories will be assigned to a new attribute
 * This function will return 'calories for each ingredient' along with the 'totalcalories'
 *
 */
export async function getCaloriesForEachIngredient(
  ingredients: string
): Promise<CaloriesDataType | string> {
  try {
    const nutrition = await nutritionService.getNutritionData(ingredients);
    if (typeof nutrition === "string") {
      throw new Error(nutrition);
    }
    const ingredientsNutrition = nutrition.items;
    const caloriesPerIngredient: Array<CaloriesPerIngredient> =
      ingredientsNutrition.map((item) => {
        return { name: item.name, calories: item.calories };
      });
    const caloriesData: CaloriesDataType = {
      caloriesPerIngredient: caloriesPerIngredient,
      totalCalories: nutrition.totalCalories,
    };
    return caloriesData;
  } catch (error) {
    return (error as Error).message;
  }
}
