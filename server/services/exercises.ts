import { sequelize } from "../database/database";
import { ExerciseType } from "../types/nutrition.types";

export const getExercises = async (): Promise<Array<ExerciseType>> => {
  const [exerciseInfo, metadata] = await sequelize.query(
    "SELECT * FROM Exercises"
  );
  return exerciseInfo as ExerciseType[];
};
