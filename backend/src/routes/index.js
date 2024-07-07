// src/routes/index.js
import { Router } from 'express';
import exampleController from '../controllers/exampleController.js';

const router = Router();

// router.get('/example', exampleController.getExample);
// router.post('/example', exampleController.createExample);

router.get('/superhero', exampleController.getHello);

export default router;
