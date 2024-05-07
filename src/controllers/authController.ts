import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config";
import User from '../models/userModel'
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { username, password, fullname, email } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ username, password: hashedPassword, email, fullname })
		await user.save();
		res.status(201).json({ message: 'User registered successfully', status: 'success' })
	}
	catch (error) {
		next(error)
	}
}
export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(401).json({mesaage:'Invalid email or password1',status:'error'})
		}
		const isPasswordValid = await bcrypt.compare(password, user.password)
		if (!isPasswordValid) {
			return res.status(401).json({mesaage:'Invalid email or password',status:'error'})
		}
		const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '5h' })
		res.status(200).json({ message: 'User login sucessfully', status: 'success', data: { token: token } })
	}
	catch (error) {
		next(error)
	}
}