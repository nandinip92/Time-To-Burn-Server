import { getCaloriesForEachIngredient } from "./calories_for_ingredients";
import {
  sampleCaloriesData,
  sampleNutritionWithTotalCalories,
} from "../data/sample_nutrition_data";
import * as nutritionService from "./nutrition";
import {
  CaloriesDataType,
  NutirionAndTotalCalories,
} from "../types/nutrition.types";
jest.mock("./nutrition");
afterEach(() => {
  jest.clearAllMocks();
});

describe("getCaloriesForEachIngredient", () => {
  const spy = jest.spyOn(nutritionService, "getNutritionData");
  it("When given wrong input as ingredients list, this function should return an error message", async () => {
    spy.mockResolvedValue("Cannot fetch Nutrition of the items from the API");

    const input = await getCaloriesForEachIngredient("fhjdhfdsjh");
    //console.log("INPUT--->", input);
    expect(input).toStrictEqual(
      "Cannot fetch Nutrition of the items from the API"
    );
    //expect(input).toBe("Cannot fetch Nutrition of the items from the API");
  });
  it("When given ingredient 'onion' as input", async () => {
    spy.mockResolvedValue(sampleNutritionWithTotalCalories);

    const input = await getCaloriesForEachIngredient("onion");
    //console.log("INPUT--->", input);
    expect(input).toStrictEqual(sampleCaloriesData);
    //expect(input).toBe("Cannot fetch Nutrition of the items from the API");
  });
});
