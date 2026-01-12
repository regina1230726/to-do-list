import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  constructor(private service: TaskService) {}

  create = async (req: Request, res: Response) => {
    const task = await this.service.create(req.body);
    res.status(201).json(task);
  };

  list = async (_: Request, res: Response) => {
    const tasks = await this.service.list();
    res.json(tasks);
  };

  complete = async (req: Request, res: Response) => {
    const task = await this.service.complete(req.params.id);
    res.json(task);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id);
    res.status(204).send();
  };
}
