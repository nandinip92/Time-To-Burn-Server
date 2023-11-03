import { calulateCaloriesPerHourByWeight } from "./calculate_calories_by_weight";
import { cyclingData, runningData } from "../data/sampleExerciseData";

describe("calulateCaloriesPerHourByWeight -  When given the exercise data(Cycling) and the userWeight the function should return correct data", () => {
  const exerciseInput = cyclingData.Cycling;
  test("Whe user weight is 155lbs", async () => {
    //Arrange
    const cyclingCalories_155lbs = {
      userWeight: "155lb",
      caloriesPerHour: {
        "Cycling, mountain bike, bmx": 598,
        "Cycling, <10 mph, leisure bicycling": 281,
        "Cycling, >20 mph, racing": 1126,
        "Cycling, 10-11.9 mph, light": 422,
        "Cycling, 12-13.9 mph, moderate": 563,
        "Cycling, 14-15.9 mph, vigorous": 704,
        "Cycling, 16-19 mph, very fast, racing": 844,
        Unicycling: 352,
        "Stationary cycling, very light": 211,
        "Stationary cycling, light": 387,
        "Stationary cycling, moderate": 493,
        "Stationary cycling, vigorous": 739,
        "Stationary cycling, very vigorous": 880,
      },
    };

    //Act
    const functionOutput = await calulateCaloriesPerHourByWeight(
      exerciseInput,
      155
    );
    //Assert
    expect(functionOutput).toStrictEqual(cyclingCalories_155lbs);
  });

  test("Whe user weight is 190lbs", async () => {
    //Arrange
    const cyclingCalories_190lbs = {
      userWeight: "190lb",
      caloriesPerHour: {
        "Cycling, mountain bike, bmx": 733,
        "Cycling, <10 mph, leisure bicycling": 345,
        "Cycling, >20 mph, racing": 1380,
        "Cycling, 10-11.9 mph, light": 517,
        "Cycling, 12-13.9 mph, moderate": 690,
        "Cycling, 14-15.9 mph, vigorous": 862,
        "Cycling, 16-19 mph, very fast, racing": 1035,
        Unicycling: 431,
        "Stationary cycling, very light": 258,
        "Stationary cycling, light": 473,
        "Stationary cycling, moderate": 603,
        "Stationary cycling, vigorous": 905,
        "Stationary cycling, very vigorous": 1078,
      },
    };
    //Act
    const functionOutput = await calulateCaloriesPerHourByWeight(
      exerciseInput,
      190
    );
    //Assert
    expect(functionOutput).toEqual(cyclingCalories_190lbs);
  });
  test("Whe user weight is 70.5479lb", async () => {
    //Arrange
    //32kgs
    const cyclingCalories_70_5479lbs = {
      userWeight: "70.5479lb",
      caloriesPerHour: {
        "Cycling, mountain bike, bmx": 272,
        "Cycling, <10 mph, leisure bicycling": 128,
        "Cycling, >20 mph, racing": 512,
        "Cycling, 10-11.9 mph, light": 192,
        "Cycling, 12-13.9 mph, moderate": 256,
        "Cycling, 14-15.9 mph, vigorous": 320,
        "Cycling, 16-19 mph, very fast, racing": 384,
        Unicycling: 160,
        "Stationary cycling, very light": 96,
        "Stationary cycling, light": 176,
        "Stationary cycling, moderate": 224,
        "Stationary cycling, vigorous": 336,
        "Stationary cycling, very vigorous": 400,
      },
    };
    //Act
    const functionOutput = await calulateCaloriesPerHourByWeight(
      exerciseInput,
      70.5479
    );
    //Assert
    expect(functionOutput).toEqual(cyclingCalories_70_5479lbs);
  });
});

describe("calulateCaloriesPerHourByWeight -  When given the exercise data (Running) and the userWeight the function should return correct data", () => {
  const exerciseInput = runningData.Running;
  test("Whe user weight is 155lbs", async () => {
    //Arrange
    const caloriesRunning_205lbs = {
      userWeight: "205lb",
      caloriesPerHour: {
        "Running, 5 mph (12 minute mile)": 745,
        "Running, 5.2 mph (11.5 minute mile)": 838,
        "Running, 6 mph (10 min mile)": 931,
        "Running, 6.7 mph (9 min mile)": 1024,
        "Running, 7 mph (8.5 min mile)": 1070,
        "Running, 7.5mph (8 min mile)": 1163,
        "Running, 8 mph (7.5 min mile)": 1256,
        "Running, 8.6 mph (7 min mile)": 1303,
        "Running, 9 mph (6.5 min mile)": 1396,
        "Running, 10 mph (6 min mile)": 1489,
        "Running, 10.9 mph (5.5 min mile)": 1675,
        "Running, cross country": 838,
        "Running, general": 745,
        "Running, on a track, team practice": 931,
        "Running, stairs, up": 1396,
        "Track and field (shot, discus)": 372,
        "Track and field (high jump, pole vault)": 558,
        "Track and field (hurdles)": 931,
      },
    };

    //Act
    const functionOutput = await calulateCaloriesPerHourByWeight(
      exerciseInput,
      205
    );
    //Assert
    expect(functionOutput).toStrictEqual(caloriesRunning_205lbs);
  });

  test("Whe user weight is 468lbs", async () => {
    //Arrange
    const caloriesRunning_468lbs = {
      userWeight: "468lb",
      caloriesPerHour: {
        "Running, 5 mph (12 minute mile)": 1700,
        "Running, 5.2 mph (11.5 minute mile)": 1913,
        "Running, 6 mph (10 min mile)": 2125,
        "Running, 6.7 mph (9 min mile)": 2337,
        "Running, 7 mph (8.5 min mile)": 2442,
        "Running, 7.5mph (8 min mile)": 2655,
        "Running, 8 mph (7.5 min mile)": 2867,
        "Running, 8.6 mph (7 min mile)": 2974,
        "Running, 9 mph (6.5 min mile)": 3186,
        "Running, 10 mph (6 min mile)": 3399,
        "Running, 10.9 mph (5.5 min mile)": 3823,
        "Running, cross country": 1913,
        "Running, general": 1700,
        "Running, on a track, team practice": 2125,
        "Running, stairs, up": 3186,
        "Track and field (shot, discus)": 849,
        "Track and field (high jump, pole vault)": 1273,
        "Track and field (hurdles)": 2125,
      },
    };
    //Act
    const functionOutput = await calulateCaloriesPerHourByWeight(
      exerciseInput,
      468
    );
    //Assert
    expect(functionOutput).toEqual(caloriesRunning_468lbs);
  });
  test("Whe user weight is 865.26lb", async () => {
    //Arrange
    //32kgs

    const caloriesRunning_865_26lbs = {
      userWeight: "865.26lb",
      caloriesPerHour: {
        "Running, 5 mph (12 minute mile)": 3144,
        "Running, 5.2 mph (11.5 minute mile)": 3537,
        "Running, 6 mph (10 min mile)": 3929,
        "Running, 6.7 mph (9 min mile)": 4322,
        "Running, 7 mph (8.5 min mile)": 4516,
        "Running, 7.5mph (8 min mile)": 4908,
        "Running, 8 mph (7.5 min mile)": 5301,
        "Running, 8.6 mph (7 min mile)": 5499,
        "Running, 9 mph (6.5 min mile)": 5892,
        "Running, 10 mph (6 min mile)": 6284,
        "Running, 10.9 mph (5.5 min mile)": 7069,
        "Running, cross country": 3537,
        "Running, general": 3144,
        "Running, on a track, team practice": 3929,
        "Running, stairs, up": 5892,
        "Track and field (shot, discus)": 1570,
        "Track and field (high jump, pole vault)": 2355,
        "Track and field (hurdles)": 3929,
      },
    };
    //Act
    const functionOutput = await calulateCaloriesPerHourByWeight(
      exerciseInput,
      865.26
    );
    //Assert
    expect(functionOutput).toEqual(caloriesRunning_865_26lbs);
  });
});
