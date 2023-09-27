import { sequelize } from "../database/database";
import { populateDummyData } from "../database/database_seed";
import { ExerciseType, ExerciseTypeWithTime } from "../types/nutrition.types";

export const getExercises = async (): Promise<Array<ExerciseType>> => {
  let exerciseInfo: ExerciseType[] = [];
  await populateDummyData();
  try {
    const [info, metadata] = await sequelize.query(
      "SELECT name, calsPerHour FROM Exercises"
    );
    exerciseInfo = info as ExerciseType[];
  } catch (error) {
    console.log(error);
  }
  return exerciseInfo;
};

export const getTimeToBurn = async (
  exerciseInfo: ExerciseType[],
  total_calories: number
) => {
  //: Promise<ExerciseTypeWithTime[]>
  const exercisesWithTime = exerciseInfo.map((exercise) =>
    getTime(exercise as ExerciseTypeWithTime, total_calories)
  );
};

const getTime = (exercise: ExerciseTypeWithTime, total_calories: number) => {
  const inHours = total_calories / exercise.calsPerHour;
  const inMinutes = inHours * 60;
  const inSeconds = inMinutes * 60;

  exercise["time_to_burn_total_cals"] = {
    seconds: Math.round((inSeconds + Number.EPSILON) * 100) / 100,
    minutes: Math.round((inMinutes + Number.EPSILON) * 100) / 100,
    hours: Math.round((inHours + Number.EPSILON) * 100) / 100,
  };
  //As Data is inside the exercise array there is no need for a return statement
  // return exercise;
};
