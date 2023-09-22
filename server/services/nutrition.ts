import * as dotenv from "dotenv";
import fetch from "node-fetch";
import { IngredientsNutrition, Nutrition } from "../types/nutrition.types";

import { sampleNutritionData } from "../data/sampleData";

export async function getNutritionData(
  ingredients: string
): Promise<IngredientsNutrition> {
  const url = process.env.API_URL + ingredients;
  //console.log("URL--->" + url);
  //return await getNutritionDataFromAPI(url);

  return sampleNutritionData;
}

async function getNutritionDataFromAPI(
  url: string
): Promise<IngredientsNutrition> {
  const APIKey = { "x-api-key": process.env.X_API_KEY as string };
  //const nutrition = []
  try {
    const apiResponse = await fetch(url, {
      headers: APIKey,
    });
    const json = await apiResponse.json();
    //console.log("Json--->", json);
    return json;
  } catch (error) {
    console.log(error);
  }

  return { items: [] };
}

const getCalories = (ingredient: Nutrition) => {
  const calories = Object.entries(ingredient)
    .filter(([key, value]) => key === "calories")
    .pop();
  //console.log("--->Inside getCalories", calories);
  return calories;
};

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

  //console.log("total_calories--->", total_calories);
  //   const result: TotalCalories = {
  //     items: nutrition.items,
  //     total_calories: total_calories as number,
  //   };
  return total_calories as number;
}
