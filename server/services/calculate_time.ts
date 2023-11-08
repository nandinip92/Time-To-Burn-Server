import { ACTIVITY, ActivityCaloriesPerWeight } from "../types/exercise.types";
import { CaloriesDataType } from "../types/nutrition.types";
import { calulateCaloriesPerHourForExerciseByWeight } from "./calculate_calories_by_weight";
import { calculateTimeToBurnTotalCalories } from "./calculate_time2burn_total_calories";

export async function calculateTime(
  ingredientCalories: CaloriesDataType,
  exercise: ACTIVITY,
  userWeight: number
): Promise<string> {
  console.log("-------------calculateTime---------------");
  //   console.log(
  //     `totalCalories: ${totalCalories}\nexercise: ${JSON.stringify(
  //       exercise
  //     )}\nweight: ${userWeight}`
  //   );
  //   const caloriesPerHourForExercise = await calulateCaloriesPerHourByWeight(
  //     exercise,
  //     userWeight
  //   );
  const exerciseCaloriesAndWeight =
    await calulateCaloriesPerHourForExerciseByWeight(exercise, userWeight);

  const totalCalories = ingredientCalories.totalCalories;
  const caloriesPerHour = exerciseCaloriesAndWeight.caloriesPerHour;
  const time_to_burn_total_calories = await calculateTimeToBurnTotalCalories(
    totalCalories,
    caloriesPerHour
  );

  return "";
}
