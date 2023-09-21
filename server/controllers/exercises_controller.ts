import { Request, Response } from "express";
import * as exerciseService from "../services/exercises";

export const getExercises = async (req: Request, res: Response) => {
  const exercises = await exerciseService.getExercises();
  res.json(exercises).status(200);
};

// export const getBook = async (req: Request, res: Response) => {
// 	const bookId = req.params.bookId;
// 	const book = await bookService.getBook(Number(bookId));

// 	if (book) {
// 		res.json(book).status(200);
// 	} else {
// 		res.status(404).json("Not found");
// 	}
// };

// export const saveBook = async (req: Request, res: Response) => {
// 	const bookToBeSaved = req.body;
// 	try {
// 		const book = await bookService.saveBook(bookToBeSaved);
// 		res.status(201).json(book);
// 	} catch (error) {
// 		res.status(400).json({ message: (error as Error).message });
// 	}
// };

// // User Story 4 - Update Book By Id Solution
// export const updateBook = async (req: Request, res: Response) => {
// 	const bookUpdateData = req.body;
// 	const bookId = Number.parseInt(req.params.bookId);

// 	const book = await bookService.updateBook(bookId, bookUpdateData);
// 	res.status(204).json(book);
// };

// // User Story - Delete Book By Id Solution
// export const deleteBook = async (req: Request, res: Response) => {
// 	const bookDeleteData = req.body;
// 	const bookId = Number.parseInt(req.params.bookId);

// 	const book = await bookService.deleteBook(bookId);
// 	res.status(204).json("Deleted Successfully");
// };
