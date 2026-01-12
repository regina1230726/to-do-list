import { Router } from "express";
import { TaskController } from "../controllers/TaskController";
import { TaskRepository } from "../repos/TaskRepository";
import { TaskService } from "../services/TaskService";

const router = Router();

const repo = new TaskRepository();
const service = new TaskService(repo);
const controller = new TaskController(service);

router.post("/", controller.create);
router.get("/", controller.list);
router.patch("/:id/complete", controller.complete);
router.delete("/:id", controller.delete);

export default router;
