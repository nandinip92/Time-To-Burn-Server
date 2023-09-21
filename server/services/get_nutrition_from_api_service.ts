import * as dotenv from "dotenv";
import fetch from "node-fetch";
import { IngredientsNutrition } from "../types/nutrition.types";
dotenv.config({ path: `.env.dev` });

export async function getNutritionDataFromAPI(
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
