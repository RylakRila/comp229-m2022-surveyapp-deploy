import express from 'express';
const router = express.Router();

import { ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../controller/auth-controller.js';

router.post('/login', ProcessLoginPage);

router.post('/register', ProcessRegisterPage);

router.get('/logout', ProcessLogoutPage);

export default router;