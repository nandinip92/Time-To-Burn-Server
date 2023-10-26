import { Request, Response } from "express";
import * as exercisesService from "../services/exercises_and_calories";

export const getExercisesInfo = async (req: Request, res: Response) => {
  //const exercise = req.params.exercise;
  try {
    const exercises = await exercisesService.getExercisesData();
    res.send(exercises);
  } catch (error) {
    res.status(500).send({ success: false, message: (error as Error).message });
  }
};
