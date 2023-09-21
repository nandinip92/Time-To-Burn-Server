import { CalBurnRate } from "../types/nutrition.types";

export const getTimeToBurn = (burnRate: CalBurnRate) => {
  const timeToBurn =
    (burnRate.exercise.calsPerHour / burnRate.caloriesToBurn.total_calories) *
    60;
  return timeToBurn;
};
