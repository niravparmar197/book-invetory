import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express'


export const validateRegister = [
	body('fullname').notEmpty().withMessage('fullname is required'),
	body('email').notEmpty().withMessage('Email is required'),
	body('username').notEmpty().withMessage('Username is required'),
	body('password').notEmpty().withMessage('password is required'),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		next()
	}

];
export const validateLogin = [
	body('email').notEmpty().withMessage('Email is required'),
	body('password').notEmpty().withMessage('Password is required'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		next()
	}

];

export const validateCreateBook = [
	body('title').notEmpty().withMessage('Title is required'),
	body('author').notEmpty().withMessage('Author is required'),
	body('category').notEmpty().withMessage('Category is required'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		next()
	}

];
export const validateUpdateBook = [
	body('title').optional().notEmpty().withMessage('Title is required'),
	body('author').optional().notEmpty().withMessage('Author is required'),
	body('category').optional().notEmpty().withMessage('Category is required'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		next()
	}
]
