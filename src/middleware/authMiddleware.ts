import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config'

export const authenticate = (req: any, res: Response, next: NextFunction): any => {
	const token = req.header('Authorization')?.split(' ')[1];
	if (!token) return res.status(401).json({ status: 'error', message: 'Access denied. No token provided.' })
	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded
		next()
	} catch (error) {
		res.status(400).json({ status: error, message: 'Invalid token.' })
	}
}