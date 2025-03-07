import {Router} from 'express'
import {register,login,getUser} from '../controllers/user.controller.js'
import  {authMiddleware} from '../authmid/auth.mid.js'


const router = Router();

router.post('/register',register)
router.post('/login',login)

router.get('/user',authMiddleware,getUser)

export default router