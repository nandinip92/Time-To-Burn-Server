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
  try {
    const nutrition = await nutritionService.getNutritionData(ingredients);
    //console.log("Nutrition--->", nutrition);
    if (nutrition.items.length === 0) {
      throw new Error("Cannot fetch Nutrition of the items from the API");
    }
    const total_calories = await nutritionService.getTotalCalories(nutrition);
    const exerciseInfo = await exercisesService.getExercises();
    if (exerciseInfo.length === 0) {
      throw new Error("Cannot fetch Exercise Info from Sequelize");
    }
    await exercisesService.getTimeToBurn(exerciseInfo, total_calories);
    const result: CalBurnRate = {
      items: nutrition.items,
      total_calories: total_calories,
      exercises: exerciseInfo,
    };

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ success: false, message: (error as Error).message });
  }
};
