import express , {Router} from 'express';
import{ register,login} from '../controllers/authController'
import { validateLogin,validateRegister } from '../middleware/validationMiddleware';
const router :Router =express.Router();

router.post('/register',validateRegister,register)
router.post('/login',validateLogin,login)

export default router;