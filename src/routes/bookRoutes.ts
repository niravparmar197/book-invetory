import express, { Router } from 'express';
import { getALLBooks, getBookById, createBook, updateBookById, deleteBookById } from '../controllers/bookController'
import { validateCreateBook, validateUpdateBook } from '../middleware/validationMiddleware';
const router: Router = express.Router();

router.get('/',  getALLBooks)
router.get('/:id',  getBookById)
router.post('/',  validateCreateBook, createBook)
router.put('/:id',  validateUpdateBook, updateBookById)
router.delete('/:id',  deleteBookById)


export default router;