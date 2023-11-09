import { Request, Response } from "express";
import * as exercisesService from "../services/calories_burned_during_exercises";

export const getExercisesInfo = async (req: Request, res: Response) => {
  //const exercise = req.params.exercise;
  try {
    const exercises = await exercisesService.getExercisesData();
    if (typeof exercises === "string") {
      throw new Error(exercises);
    }
    res.send(exercises);
  } catch (error) {
    res.status(500).send({ success: false, message: (error as Error).message });
  }
};
