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
    if (typeof nutrition === "string") {
      throw new Error(nutrition);
    }
    res.status(200).send(nutrition);
  } catch (error) {
    res.status(500).send({ success: false, message: (error as Error).message });
  }
};
