// routes/comentariosRoutes.js

import { Router } from "express";
import * as comentariosController from "../controllers/comentariosController.js";

const router = Router();

router.get("/:id", comentariosController.listarPorFilmeId);
router.post("/", comentariosController.criarComentario);

export default router;