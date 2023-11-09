import request from "supertest";
import { app } from "../index";
import * as nutritionService from "../services/nutrition";
import { NutirionAndTotalCalories } from "../types/nutrition.types";
import {
  sampleNutritionWithTotalCalories,
  sampleNutritionWithTotalCalories_2,
} from "../data/sample_nutrition_data";

jest.mock("../services/nutrition");
afterEach(async () => {
  jest.clearAllMocks();
});

describe("GET /api/nutrition/:ingredients endpoint", () => {
  test("status code successful 200 for fetching data from the API", async () => {
    //Arrange
    const mockGetNutrition = jest
      .spyOn(nutritionService, "getNutritionData")
      .mockResolvedValue(
        sampleNutritionWithTotalCalories as NutirionAndTotalCalories
      );
    //Act
    const res = await request(app).get("/api/nutrition/onion");
    //Assert

    expect(res.statusCode).toEqual(200);
  });

  test("Fetching valid data from the API", async () => {
    //Arrange
    const mockGetNutrition = jest
      .spyOn(nutritionService, "getNutritionData")
      .mockResolvedValue(
        sampleNutritionWithTotalCalories_2 as NutirionAndTotalCalories
      );
    //Act
    const res = await request(app).get("/api/nutrition/onion");
    //Assert
    expect(res.body).toEqual(sampleNutritionWithTotalCalories_2);
    expect(res.statusCode).toEqual(200);
  });
  test("status code successful 500 when unable to fetch data from the API", async () => {
    //Arrange
    const errorMessage = "Cannot fetch Nutrition of the items from the API";
    const output = { success: false, message: errorMessage };
    const mockGetNutrition = jest
      .spyOn(nutritionService, "getNutritionData")
      .mockResolvedValue(errorMessage);
    //Act
    const res = await request(app).get("/api/nutrition/onion");
    //Assert

    expect(res.statusCode).toEqual(500);
    expect(res.body).toStrictEqual(output);
  });
});
