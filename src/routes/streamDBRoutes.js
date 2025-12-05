import { Router } from "express";
import * as streamDBController from "../controllers/streamDBController.js";

const router = Router();

router.get("/", streamDBController.listarTodos);
router.get("/:id", streamDBController.listarUm);
router.post("/", streamDBController.criar);
router.put("/:id", streamDBController.atualizar);
router.delete("/:id", streamDBController.deletar);

export default router;