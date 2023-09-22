import { sequelize } from "../database/database";
import { ExerciseType, ExerciseTypeWithTime } from "../types/nutrition.types";

export const getExercises = async (): Promise<Array<ExerciseType>> => {
  const [exerciseInfo, metadata] = await sequelize.query(
    "SELECT name, calsPerHour FROM Exercises"
  );
  return exerciseInfo as ExerciseType[];
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
  // return exercise;
};
