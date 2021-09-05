import express from 'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';

const router = express.Router();
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

export default router;