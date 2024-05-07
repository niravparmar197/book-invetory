import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URL } from './config';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import errorMiddleware from './middleware/errorMiddleware';
import { authenticate } from './middleware/authMiddleware';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books',authenticate, bookRoutes);

app.use(errorMiddleware);
mongoose.connect(MONGODB_URL)
	.then(() => console.log('connected DB'))
	.catch(((err: any) => console.error('Failed to connect DB')));

app.listen(PORT, () => {
	console.log(`server is running port ${PORT}`)
})
export default app;