import { ACTIVITY, ActivityCaloriesPerWeight } from "../types/exercise.types";

/*
 * Following funtion is used to get the calories burned per hour for the given specific exercise category
 * Calculating calories according to the userWeight
 *  1. IF the userWeight is in [130, 150, 180, 205] then
 *        return the calories data the is already stored for that weight
 *  2. ELSE calculate the calories burned accoring to the given userWeight with reference to the closest value in the standard weights list
 */

export async function calulateCaloriesPerHourForExerciseByWeight(
  exercise: ACTIVITY,
  userWeight: number
): Promise<ActivityCaloriesPerWeight> {
  const standardWeights = [130, 155, 180, 205];
  //If userWeight is in the standardWeights list the assigh that weight
  // ELSE finding the closest value to the userWeight in the standardWeights list
  const weight = standardWeights.includes(userWeight)
    ? userWeight
    : standardWeights.reduce((prev, curr) =>
        Math.abs(curr - userWeight) < Math.abs(prev - userWeight) ? curr : prev
      );
  const weightWithUnits = weight + "lb";

  let caloriesPerHourForExercise = new Map<keyof typeof exercise, number>();
  const exerciseKeys = Object.keys(exercise) as (keyof typeof exercise)[];
  if (userWeight === weight) {
    exerciseKeys.forEach((key) => {
      caloriesPerHourForExercise.set(key, exercise[key][weightWithUnits]);
    });
  } else {
    exerciseKeys.forEach((key) => {
      const value = Math.trunc(
        (exercise[key][weightWithUnits] * userWeight) / weight
      );
      caloriesPerHourForExercise.set(key, value);
    });
  }

  // Object.fromEntries to convert a Map to an Object
  const caloriesPerHourForExerciseObj = Object.fromEntries(
    caloriesPerHourForExercise
  ) as ACTIVITY;

  //  console.log("caloriesPerHourForExercise:", caloriesPerHourForExercise);

  const calories_per_hour_by_weight: ActivityCaloriesPerWeight = {
    userWeight: userWeight + "lb",
    caloriesPerHour: caloriesPerHourForExerciseObj,
  };
  return calories_per_hour_by_weight;
}
