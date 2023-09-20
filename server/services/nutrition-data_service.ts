import { Nutrition } from "../types/nutrition.types";
import { getNutritionDataFromAPI } from "./get_nutrition_from_api_service";

export async function getNutritionData(
  ingredients: string
): Promise<Nutrition[]> {
  const url = process.env.API_URL + ingredients;
  console.log("URL--->" + url);
  return await getNutritionDataFromAPI(url);
  //return [{ name: "HELLOOOOO......!!!" }] as Nutrition[];
}
