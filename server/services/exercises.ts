import { Exercise } from "../models/exercise";

export const getExercises = async () => {
  return Exercise.findAll();
};

// export const getExercise = async (exerciseId: number) => {
// 	return Exercise.findOne({
// 		where: { exerciseId },
// 	});
// };

// export const saveExercise = async (exercise: Exercise) => {
// 	return Exercise.create<Exercise>(exercise);
// };

// // User Story 4 - Update Book By Id Solution
// export const updateExercise = async (exerciseId: number, exercise: Exercise) => {
// 	return Exercise.update(exercise, {
// 		where: {
// 			exerciseId,
// 		},
// 	});
// };

// // Delete Book By Id Solution
// export const deleteExercise = async (exerciseId: number) => {
// 	return Exercise.destroy({
// 		where: { exerciseId },
// 	});
// };
