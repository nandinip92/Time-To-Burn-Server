import { ACTIVITY, CaloriesPerWeight } from "../types/exercise.types";
import { calulateCaloriesPerHourByWeight } from "./calculate_calories_by_weight";

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
  const caloriesPerHourPerExercise = await calulateCaloriesPerHourByWeight(
    exercise,
    userWeight
  );
  return "";
}
