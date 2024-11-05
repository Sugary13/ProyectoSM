import { Router } from 'express';
import { getPolizas } from '../controllers/polizas.controller.js';


const router = Router();

router.get("/api/polizas", getPolizas)

export default router;