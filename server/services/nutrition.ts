import * as dotenv from "dotenv";
import fetch from "node-fetch";
import {
  IngredientsNutrition,
  Nutrition,
  CalBurnRate,
} from "../types/nutrition.types";

import { sampleNutritionData, sampleNutritionData_2 } from "../data/sampleData";

import * as exercisesService from "../services/exercises";
import { calculateTotalCalories } from "./calculate_total_calories";

//Function to call the actual API
export async function getNutritionData(
  ingredients: string
): Promise<CalBurnRate | string> {
  const url = process.env.API_URL + ingredients;
  try {
    const nutrition = await getNutritionDataFromAPI(url);
    if (nutrition.items.length === 0) {
      throw new Error("Cannot fetch Nutrition of the items from the API");
    }
    const total_calories = await calculateTotalCalories(nutrition);
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
    return result;
  } catch (error) {
    return (error as Error).message;
  }
}

//Function to call API and get the Nutrition data of the ingredients from the API
async function getNutritionDataFromAPI(
  url: string
): Promise<IngredientsNutrition> {
  const APIKey = { "x-api-key": process.env.X_API_KEY as string };
  const nutritionResult: IngredientsNutrition = { items: [] };
  try {
    const apiResponse = await fetch(url, {
      headers: APIKey,
    });
    const json: IngredientsNutrition = await apiResponse.json();
    //Calories externalAPI is giving a json return as {message:"Forbidden"} if invalid
    if (json.items !== undefined) nutritionResult.items = json.items;
    else console.log("Error from Calories external API call--->", json);
  } catch (error) {
    console.log(error);
  }
  return nutritionResult;
  //return sampleNutritionData_2;
}

/*
export async function getNutritionData(
  ingredients: string
): Promise<IngredientsNutrition> {
  const url = process.env.API_URL + ingredients;
  return await getNutritionDataFromAPI(url);
  //return sampleNutritionData; //Sample data for tesing the functions while developing
}
*/
