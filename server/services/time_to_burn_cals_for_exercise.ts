import {
  IngredientsNutrition,
  Nutrition,
  CalBurnRate,
} from "../types/nutrition.types";
import * as nutritionService from "../services/nutrition";
import * as exercisesService from "../services/exercises_and_calories";
import * as calculateTimeService from "../services/calculate_time";

import { sampleNutritionData, sampleNutritionData_2 } from "../data/sampleData";
import { Activities } from "../types/exercise.types";

//Function to call to process the user input from the web API call
export async function processingUserInputToCalculateTimeToBurn(
  ingredients: string,
  exercise: Activities,
  weight: number
): Promise<CalBurnRate | string> {
  const url = process.env.API_URL + ingredients;
  try {
    const nutrition = await nutritionService.getNutritionData(url);
    if (typeof nutrition === "string" || nutrition.items.length === 0) {
      throw new Error("Cannot fetch Nutrition of the items from the API");
    }
    const exerciseData = await exercisesService.getSpecificExercisesData(
      exercise
    );
    if (exerciseData === undefined) {
      throw new Error("Cannot fetch exercise data from ActiviesList.json");
    }
    const time_to_burn = await calculateTimeService.calculateTime(
      nutrition.total_calories,
      exerciseData,
      weight
    );

    return "";
  } catch (error) {
    return (error as Error).message;
  }
}
