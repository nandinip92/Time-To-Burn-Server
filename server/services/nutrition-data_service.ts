import { IngredientsNutrition } from "../types/nutrition.types";
import { getNutritionDataFromAPI } from "./get_nutrition_from_api_service";

const sampleData = {
  items: [
    {
      name: "carrots",
      calories: 477.8,
      serving_size_g: 1360.7759999999998,
      fat_total_g: 2.3,
      fat_saturated_g: 0.3,
      protein_g: 10.3,
      sodium_mg: 775,
      potassium_mg: 410,
      cholesterol_mg: 0,
      carbohydrates_total_g: 110.2,
      fiber_g: 40.7,
      sugar_g: 46.7,
    },
    {
      name: "chicken sandwich",
      calories: 243.9,
      serving_size_g: 100,
      fat_total_g: 11.2,
      fat_saturated_g: 2.1,
      protein_g: 16.2,
      sodium_mg: 767,
      potassium_mg: 184,
      cholesterol_mg: 35,
      carbohydrates_total_g: 20.9,
      fiber_g: 1.4,
      sugar_g: 3.6,
    },
  ],
};

export async function getNutritionData(
  ingredients: string
): Promise<IngredientsNutrition> {
  const url = process.env.API_URL + ingredients;
  console.log("URL--->" + url);
  //return await getNutritionDataFromAPI(url);

  return sampleData;
  //return [{ name: "HELLOOOOO......!!!" }] as Nutrition[];
}
