import { Request, Response, NextFunction } from "express";
import Book from '../models/bookModel'

export const getALLBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const books = await Book.find();
		res.status(200).json({ data: books, message: 'book list found', status: 'success' })
	}
	catch (error) {
		res.status(500).json({ message: 'server error', status: 'error' })

	}
}
export const getBookById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	const { id } = req.params
	try {
		const book = await Book.findById(id)
		if (!book) {
			res.status(404).json({ message: 'Book not found', status: 'error' })
			return;
		}
		res.status(200).json({ data: book, message: 'book details found', status: 'success' })

	}
	catch (error) {
		res.status(500).json({ message: 'server error', status: 'error' })

	}
}
export const createBook = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	const { title, author, category } = req.body;

	try {
		const book = await Book.create({ title, author, category })
		res.status(201).json({ data: book, message: 'create book details', status: 'success' })

	}
	catch (error) {
		res.status(500).json({ message: 'server error', status: 'error' })

	}
}
export const updateBookById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	const { id } = req.params;
	const { title, author, category } = req.body;

	try {
		const updateBook = await Book.findByIdAndUpdate(id, { title, author, category }, { new: true })
		if (!updateBook) {
			res.status(404).json({ message: 'Book not found', status: 'error' })
			return;
		}
		res.json({ message: 'Book details updated', data: updateBook, status: 'success' })
	}
	catch (error) {
		res.status(500).json({ message: 'server error', status: 'error' })

	}
}
export const deleteBookById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	const { id } = req.params
	try {
		const deletedBook = await Book.findByIdAndDelete(id)
		if (!deletedBook) {
			res.status(404).json({ message: 'Book not found', status: 'error' })
			return;

		}
		res.status(201).json({ message: 'Book details delated', data: deletedBook, status: 'success' })

	}
	catch (error) {
		res.status(500).json({ message: 'server error', status: 'error' })

	}
}
