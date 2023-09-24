import * as dotenv from "dotenv";
import fetch from "node-fetch";
import { IngredientsNutrition, Nutrition } from "../types/nutrition.types";

import { sampleNutritionData, sampleNutritionData_2 } from "../data/sampleData";

//Function to call the actual API
export async function getNutritionData(
  ingredients: string
): Promise<IngredientsNutrition> {
  const url = process.env.API_URL + ingredients;
  return await getNutritionDataFromAPI(url);
  //return sampleNutritionData; //Sample data for tesing the functions while developing
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
}

//Function to calculate the total calories
export async function getTotalCalories(
  nutrition: IngredientsNutrition
): Promise<number> {
  const calories = nutrition.items.map((ingredient) => getCalories(ingredient));

  const total_calories = calories
    .map((x) => {
      if (x) return x[1];
    })
    .reduce(
      (accumulator, currenValue) =>
        (accumulator as number) + (currenValue as number)
    );

  return total_calories as number;
}

const getCalories = (ingredient: Nutrition) => {
  const calories = Object.entries(ingredient)
    .filter(([key, value]) => key === "calories")
    .pop();
  return calories;
};
