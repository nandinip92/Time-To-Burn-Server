import { ACTIVITY, ActivityCaloriesPerWeight } from "../types/exercise.types";

/*
 * Following funtion is used to get the calories burned per hour for the given specific exercise category
 * Calculating calories according to the user_weight
 *  1. IF the user_weight is in [130, 150, 180, 205] then
 *        return the calories data the is already stored for that weight
 *  2. ELSE calculate the calories burned accoring to the given user_weight with reference to the closest value in the standard weights list
 */

export async function calulateCaloriesPerHourForExerciseByWeight(
  exercise: ACTIVITY,
  user_weight: number
): Promise<ActivityCaloriesPerWeight> {
  const standardWeights = [130, 155, 180, 205];
  //If user_weight is in the standardWeights list the assigh that weight
  // ELSE finding the closest value to the user_weight in the standardWeights list
  const weight = standardWeights.includes(user_weight)
    ? user_weight
    : standardWeights.reduce((prev, curr) =>
        Math.abs(curr - user_weight) < Math.abs(prev - user_weight)
          ? curr
          : prev
      );
  const weightWithUnits = weight + "lb";

  let calories_per_hour_for_exercise = new Map<keyof typeof exercise, number>();
  const exerciseKeys = Object.keys(exercise) as (keyof typeof exercise)[];
  if (user_weight === weight) {
    exerciseKeys.forEach((key) => {
      calories_per_hour_for_exercise.set(key, exercise[key][weightWithUnits]);
    });
  } else {
    exerciseKeys.forEach((key) => {
      const value = Math.trunc(
        (exercise[key][weightWithUnits] * user_weight) / weight
      );
      calories_per_hour_for_exercise.set(key, value);
    });
  }

  // Object.fromEntries to convert a Map to an Object
  const calories_per_hour_for_exercise_obj = Object.fromEntries(
    calories_per_hour_for_exercise
  ) as ACTIVITY;

  //  console.log("calories_per_hour_for_exercise:", calories_per_hour_for_exercise);

  const calories_per_hour_by_weight: ActivityCaloriesPerWeight = {
    user_weight: user_weight + "lb",
    calories_per_hour: calories_per_hour_for_exercise_obj,
  };
  return calories_per_hour_by_weight;
}
