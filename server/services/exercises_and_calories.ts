import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import "../data/ActivitiesList.json";
import { ActivitiesList } from "../data/ActivitiesList";
import { Exercise } from "../models/exercise";
import { ExercisesType } from "../types/exercise.types";

export const getExercisesData = async (): Promise<
  ExercisesType | undefined
> => {
  //const exercise = req.params.exercise;
  console.log("------getExercisesData------");

  const filePath = `../data/ActivitiesList.json`;
  const rawData = fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
  const jsonData: ExercisesType = JSON.parse(rawData);
  console.log(jsonData.Cycling);
  return jsonData;
};
