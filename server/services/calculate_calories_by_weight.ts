import { ACTIVITY, CaloriesPerWeight } from "../types/exercise.types";

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
): Promise<CaloriesPerWeight> {
  const standardWeights = [130, 155, 180, 205];
  //If userWeight is in the standardWeights list the assigh that weight
  // ELSE finding the closest value to the userWeight in the standardWeights list
  const weight = standardWeights.includes(userWeight)
    ? userWeight
    : standardWeights.reduce((prev, curr) =>
        Math.abs(curr - userWeight) < Math.abs(prev - userWeight) ? curr : prev
      );
  const weightWithUnits = weight + "lb";
  let caloriesPerHourForExercise = {};

  if (userWeight === weight) {
    (Object.keys(exercise) as (keyof typeof exercise)[]).forEach((key) => {
      caloriesPerHourForExercise[key] = exercise[key][weightWithUnits];
    });
  } else {
    (Object.keys(exercise) as (keyof typeof exercise)[]).forEach((key) => {
      caloriesPerHourForExercise[key] = Math.trunc(
        (exercise[key][weightWithUnits] * userWeight) / weight
      ) as keyof ACTIVITY;
    });
  }

  //console.log("caloriesPerHourForExercise:", caloriesPerHour);

  const caloriesPerHourByWeight: CaloriesPerWeight = {
    userWeight: userWeight + "lb",
    caloriesPerHourForExercise: caloriesPerHourForExercise,
  };
  return caloriesPerHourByWeight;
}
