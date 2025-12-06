import { Router } from "express";
import * as comentariosController from "../controllers/comentarioController.js";

const router = Router();
router.get("/", comentariosController.listarTodos)
router.get("/:id", comentariosController.listarPorFilmeId);
router.post("/", comentariosController.criarComentario);
router.delete("/:id", comentariosController.deletarComentario);

export default router;