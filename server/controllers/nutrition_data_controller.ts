import { Request, Response } from "express";
import * as nutritionService from "../services/nutrition";
import * as exercisesService from "../services/exercises";
import { CalBurnRate } from "../types/nutrition.types";

export const getNutritionInfo = async (req: Request, res: Response) => {
  const ingredients = req.params.ingredients;
  if (ingredients === undefined) {
    res.status(500).send({ message: "Invalid ingredient list" });
    return;
  }
  const nutrition = await nutritionService.getNutritionData(ingredients);
  //console.log("nutrition--->", nutrition);
  //res.status(200).send(nutrition);
  const total_calories = await nutritionService.getTotalCalories(nutrition);
  //res.status(200).send(total_calories);
  const exerciseInfo = await exercisesService.getExercises();
  const result: CalBurnRate = {
    items: nutrition.items,
    total_calories: total_calories,
    exercises: exerciseInfo,
  };
  res.status(200).send(result);
};
