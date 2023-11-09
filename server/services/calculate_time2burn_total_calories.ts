import { ACTIVITY } from "../types/exercise.types";
import { Time, TimeToBurnPerActivity } from "../types/time.types";

/*
 * Following funtion will take the totalCalories and exercise data as inputs
 * Eg: exerciseCaloriesPerHour = {'Cycling, mountain bike, bmx': 656,
 *                                   'Cycling, <10 mph, leisure bicycling': 308,
 *                                   'Cycling, >20 mph, racing': 1235,
 *                                   'Cycling, 10-11.9 mph, light': 462,....}
 *    totalCalories: 721.7
 *
 * It returns the following output
 * timeToBurn = [
 *                  {
 *                   activity: [ 'Cycling, mountain bike, bmx', 656 ],
 *                   timeToBurn: { seconds: Infinity, minutes: Infinity, hours: Infinity }
 *                  },
 *                 {
 *                   activity: [ 'Cycling, <10 mph, leisure bicycling', 308 ],
 *                   timeToBurn: { seconds: 2598120, minutes: 43302, hours: 721.7 }
 *                 },
 *                 {
 *                   activity: [ 'Cycling, >20 mph, racing', 1235 ],
 *                   timeToBurn: { seconds: 1299060, minutes: 21651, hours: 360.85 }
 *                 },
 *                 {
 *                   activity: [ 'Cycling, 10-11.9 mph, light', 462 ],
 *                   timeToBurn: { seconds: 866040, minutes: 14434, hours: 240.57 }
 *                 },
 *                 .....
 *               ]
 */

export async function calculateTimeToBurnTotalCalories(
  totalCalories: number,
  exerciseCaloriesPerHour: ACTIVITY
): Promise<TimeToBurnPerActivity> {
  const activityName = Object.entries(exerciseCaloriesPerHour);
  const timeToBurn: TimeToBurnPerActivity = activityName.map(
    ([activity, calories]) => {
      const time: Time = calculateTime(calories as number, totalCalories);
      const activityName = activity as keyof typeof exerciseCaloriesPerHour;
      return { activity: activityName, timeToBurn: time };
    }
  );
  return timeToBurn;
}

/*
 * Following funtion will take the caloriesPerHour data for each exercise and
 * calculate time to burn in hourns, minutes and seconds
 */
const calculateTime = (
  exerciseCaloriesPerHour: number,
  totalCalories: number
): Time => {
  const inHours = totalCalories / exerciseCaloriesPerHour;
  const inMinutes = inHours * 60;
  const inSeconds = inMinutes * 60;

  const time = {
    seconds: Math.round((inSeconds + Number.EPSILON) * 100) / 100,
    minutes: Math.round((inMinutes + Number.EPSILON) * 100) / 100,
    hours: Math.round((inHours + Number.EPSILON) * 100) / 100,
  };
  return time;
};
