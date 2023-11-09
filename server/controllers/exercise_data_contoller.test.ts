import request from "supertest";
import { app } from "../index";
import * as exercisesService from "../services/calories_burned_during_exercises";
import { readFileSync } from "fs";
jest.mock("../services/calories_burned_during_exercises");
afterEach(async () => {
  jest.clearAllMocks();
});
beforeEach(async () => {
  const file_name = "../data/activities_list.json";
  //jest.mock('fs',()=>{readFileSync: jest.fn((file_name)=>{ return {}})})
  jest.mock("fs", () => {
    return { readFileSync: jest.fn() };
  });
});

describe("GET /api/nutrition/:ingredients endpoint", () => {
  test("status code successful 200 for fetching data from the JSON", async () => {
    //Arrange
    const mockGetNutrition = jest.spyOn(exercisesService, "getExercisesData");
    //Act
    const res = await request(app).get("/api/exercises");
    //Assert

    expect(res.statusCode).toEqual(200);
  });
  test("status code unsuccessful 500 for not fetching data from 'activities_list.json'", async () => {
    //Arrange
    const errorMessage =
      "ENOENT: no such file or directory open '../server/data/activities_list.json'";
    const mockGetNutrition = jest
      .spyOn(exercisesService, "getExercisesData")
      .mockResolvedValue(errorMessage);
    const output = {
      success: false,
      message: errorMessage,
    };
    //Act
    const res = await request(app).get("/api/exercises");
    //Assert

    expect(res.statusCode).toEqual(500);
    expect(res.body).toStrictEqual(output);
  });
});
