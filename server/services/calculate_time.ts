import { ACTIVITY, CaloriesPerWeight } from "../types/exercise.types";
import { CaloriesDataType } from "../types/nutrition.types";
import { calulateCaloriesPerHourForExerciseByWeight } from "./calculate_calories_by_weight";
import { calculateTimeToBurnTotalCalories } from "./calculate_time2burn_total_calories";

export async function calculateTime(
  ingredient_calories: CaloriesDataType,
  exercise: ACTIVITY,
  user_weight: number
): Promise<string> {
  console.log("-------------calculateTime---------------");
  //   console.log(
  //     `total_calories: ${total_calories}\nexercise: ${JSON.stringify(
  //       exercise
  //     )}\nweight: ${user_weight}`
  //   );
  //   const calories_per_hour_for_exercise = await calulateCaloriesPerHourByWeight(
  //     exercise,
  //     user_weight
  //   );
  const calories_per_hour_for_exercise =
    await calulateCaloriesPerHourForExerciseByWeight(exercise, user_weight);

  const total_calories = ingredient_calories.total_calories;
  const time_to_burn_total_calories = await calculateTimeToBurnTotalCalories(
    total_calories,
    calories_per_hour_for_exercise
  );
  return "";
}
