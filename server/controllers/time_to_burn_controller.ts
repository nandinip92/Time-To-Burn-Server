import { Request, Response } from "express";
import * as timeToBurnService from "../services/time_to_burn_cals_for_exercise";
import { CalBurnRate } from "../types/nutrition.types";
import { Activities } from "../types/exercise.types";

export const processUserInputData = async (req: Request, res: Response) => {
  const ingredients = req.params.ingredients;
  const exercise = req.params.exercise as Activities;
  const weight = req.params.weight;
  if (ingredients === undefined) {
    res.status(500).send({ message: "Invalid ingredient list" });
    return;
  }
  try {
    const nutrition =
      await timeToBurnService.processingUserInputToCalculateTimeToBurn(
        ingredients,
        exercise,
        parseInt(weight)
      );
    //console.log("Nutrition--->", nutrition);
    if (typeof nutrition === "string") {
      throw new Error(nutrition);
    }
    res.status(200).send(nutrition);
  } catch (error) {
    res.status(500).send({ success: false, message: (error as Error).message });
  }
};
