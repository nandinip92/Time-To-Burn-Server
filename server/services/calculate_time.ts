import { ACTIVITY, CaloriesPerWeight } from "../types/exercise.types";
import { calulateCaloriesPerHourForExerciseByWeight } from "./calculate_calories_by_weight";
import { calculateTimeToBurnTotalCalories } from "./calculate_time2burn_total_calories";

export async function calculateTime(
  total_calories: number,
  exercise: ACTIVITY,
  userWeight: number
): Promise<string> {
  console.log("-------------calculateTime---------------");
  //   console.log(
  //     `total_calories: ${total_calories}\nexercise: ${JSON.stringify(
  //       exercise
  //     )}\nweight: ${userWeight}`
  //   );
  //   const caloriesPerHourPerExercise = await calulateCaloriesPerHourByWeight(
  //     exercise,
  //     userWeight
  //   );
  const caloriesPerHourPerExercise =
    await calulateCaloriesPerHourForExerciseByWeight(exercise, userWeight);
  const timetoBurnTotalCalories = await calculateTimeToBurnTotalCalories(
    total_calories,
    caloriesPerHourPerExercise
  );
  return "";
}
