import {
  CaloriesDataType,
  IngredientsNutrition,
  Nutrition,
  TotalCaloriesWithNutirion,
} from "../types/nutrition.types";
import * as nutritionService from "../services/nutrition";
import * as exercisesService from "./calories_for_exercises";
import * as calculateTimeService from "./get_time_to_burn";
import { getCaloriesForEachIngredient } from "./calories_for_ingredients";

import { sampleNutritionData, sampleNutritionData_2 } from "../data/sampleData";
import { Activities } from "../types/exercise.types";
import { TimeToBurn } from "../types/time.types";

//Function to call to process the user input from the web API call
export async function processingUserInputToCalculateTimeToBurn(
  ingredients: string,
  exercise: Activities,
  weight: number
): Promise<TimeToBurn | string> {
  try {
    const ingredientCalories = await getCaloriesForEachIngredient(ingredients);
    if (typeof ingredientCalories === "string") {
      throw new Error(ingredientCalories);
    }
    const exerciseData = await exercisesService.getSpecificExercisesData(
      exercise
    );
    if (exerciseData === undefined) {
      throw new Error("Cannot fetch exercise data from ActiviesList.json");
    }
    const timeToBurnTotalCalories = await calculateTimeService.getTimeToBurn(
      ingredientCalories as any,
      exerciseData,
      weight
    );
    if (typeof timeToBurnTotalCalories === "string") {
      throw new Error(timeToBurnTotalCalories);
    }
    const timeToBurn: TimeToBurn = {
      weight: weight + "lb",
      ingredientCalories: ingredientCalories,
      timeToBurnTotalCalories: timeToBurnTotalCalories,
    };
    return timeToBurn;
  } catch (error) {
    return (error as Error).message;
  }
}
