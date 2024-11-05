import {Router} from 'express';
import { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getUsuario } from '../controllers/usuarios.controller.js';  

const router = Router();


router.get("/usuarios", getUsuarios)

router.get("/usuarios/:Usuario", getUsuario)

router.post("/usuarios/", createUsuarios)

router.patch("/usuarios/:Id", updateUsuarios)

router.delete("/usuarios/:Usuario", deleteUsuarios)

export default router;