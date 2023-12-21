import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

// Rotas da aplicação (acesse via URL)
router.post('/register', ApiController.register);
router.post('/login', ApiController.login);
router.get('/list', ApiController.list);

export default router;