import { ACTIVITY, ActivityCaloriesPerWeight } from "../types/exercise.types";
import { CaloriesDataType } from "../types/nutrition.types";
import { calulateCaloriesPerHourForExerciseByWeight } from "./calculate_calories_by_weight";
import { calculateTimeToBurnTotalCalories } from "./calculate_time2burn_total_calories";

export async function getTimeToBurn(
  ingredientCalories: CaloriesDataType,
  exercise: ACTIVITY,
  userWeight: number
): Promise<string> {
  try {
    const exerciseCaloriesAndWeight =
      await calulateCaloriesPerHourForExerciseByWeight(exercise, userWeight);

    const totalCalories = ingredientCalories.totalCalories;
    const caloriesPerHour = exerciseCaloriesAndWeight.caloriesPerHour;
    const timeToBurnTotalCalories = await calculateTimeToBurnTotalCalories(
      totalCalories,
      caloriesPerHour
    );
    console.log("timeToBurnTotalCalories", timeToBurnTotalCalories);
    return "";
  } catch (error) {
    return (error as Error).message;
  }
}
