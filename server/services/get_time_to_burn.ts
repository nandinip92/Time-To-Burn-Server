import { ACTIVITY, ActivityCaloriesPerWeight } from "../types/exercise.types";
import { CaloriesDataType } from "../types/nutrition.types";
import { Time, TimeToBurn, TimeToBurnPerActivity } from "../types/time.types";
import { calulateCaloriesPerHourForExerciseByWeight } from "./calculate_calories_by_weight";
import { calculateTimeToBurnTotalCalories } from "./calculate_time2burn_total_calories";
/*
 * Tis funtion will to the following
 * 1. will calculate the calories burned per hour for exercise for the given userWeight
 *        |-> Check-> calulateCaloriesPerHourForExerciseByWeight
 * 2.Taking the exerciseCalories calculated from the above and the totalCalories together as input to
 * 'calculateTimeToBurnTotalCalories', this will return the timeToBurnTotalCalories
 *
 */
export async function getTimeToBurn(
  ingredientCalories: CaloriesDataType,
  exercise: ACTIVITY,
  userWeight: number
): Promise<TimeToBurnPerActivity | string> {
  try {
    const exerciseCaloriesAndWeight =
      await calulateCaloriesPerHourForExerciseByWeight(exercise, userWeight);

    const totalCalories = ingredientCalories.totalCalories;
    const caloriesPerHour = exerciseCaloriesAndWeight.caloriesPerHour;
    const timeToBurnTotalCalories: TimeToBurnPerActivity =
      await calculateTimeToBurnTotalCalories(totalCalories, caloriesPerHour);

    console.log("exerciseCaloriesAndWeight", exerciseCaloriesAndWeight);
    //console.log("timeToBurnTotalCalories", timeToBurnTotalCalories);
    return timeToBurnTotalCalories;
  } catch (error) {
    return (error as Error).message;
  }
}
