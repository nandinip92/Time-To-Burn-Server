import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Activities, ACTIVITY, ExercisesType } from "../types/exercise.types";

//following funtion is to get all the exercises data
export const getExercisesData = async (): Promise<ExercisesType | string> => {
  try {
    const filePath = `../data/activities_list.json`;
    const rawData = fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
    const jsonData: ExercisesType = JSON.parse(rawData);
    return jsonData;
  } catch (error) {
    return (error as Error).message;
  }
};

/*
 * Following funtion to to get only specific exercise data
 * This will call getExercisesData to get all the exercises data
 * and return only exercises from category given by the user
 * i.e., Cycling | Running | Walking | Swimming |AerobicsDancing
 */
export const getSpecificExercisesData = async (
  exercise: Activities
): Promise<ACTIVITY | string | undefined> => {
  const exercisesJSONData = await getExercisesData();
  if (typeof exercisesJSONData === "string") {
    return exercisesJSONData;
  }
  if (
    typeof exercisesJSONData !== "string" &&
    exercisesJSONData.hasOwnProperty(exercise)
  )
    return exercisesJSONData[exercise];
  else return undefined;
};
