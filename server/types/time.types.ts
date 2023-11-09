import { ACTIVITY } from "./exercise.types";
import { CaloriesDataType } from "./nutrition.types";
export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

type ActivityAndTimeToBurn = {
  activity: keyof ACTIVITY;
  timeToBurn: Time;
};

export type TimeToBurnPerActivity = Array<ActivityAndTimeToBurn>;

export type TimeToBurn = {
  weight: string;
  ingredientCalories: CaloriesDataType;
  timeToBurnTotalCalories: TimeToBurnPerActivity;
};
