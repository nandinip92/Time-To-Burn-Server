import request from "supertest";
import { app } from "../index";
import { populateDummyData } from "../database/database_seed";
import { teardown } from "../database/database";
import * as nutritionService from "../services/nutrition";
import { sampleDataResult, sampleNutritionData } from "../data/sampleData";
import { CalBurnRate } from "../types/nutrition.types";

jest.mock("../services/nutrition");
//jest.mock("../services/exercises");
beforeAll(async () => {
  await populateDummyData();
});

afterEach(async () => {
  jest.clearAllMocks();
});
afterAll(async () => {
  await teardown();
});

describe("GET /api/nutrition/:ingredients endpoint", () => {
  test("status code successful 200 for fetching data from the API", async () => {
    //Arrange
    const mockGetNutrition = jest
      .spyOn(nutritionService, "getNutritionData")
      .mockResolvedValue(sampleDataResult as CalBurnRate);
    //Act
    const res = await request(app).get("/api/nutrition/onion");
    //Assert

    expect(res.statusCode).toEqual(200);
  });

  test("Fetching valid data from the API", async () => {
    //Arrange
    const mockGetNutrition = jest
      .spyOn(nutritionService, "getNutritionData")
      .mockResolvedValue(sampleDataResult as CalBurnRate);
    //Act
    const res = await request(app).get("/api/nutrition/onion");
    //Assert
    expect(res.body).toEqual(sampleDataResult);
    expect(res.statusCode).toEqual(200);
  });
});
