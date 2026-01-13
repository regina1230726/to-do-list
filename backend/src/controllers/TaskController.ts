import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  constructor(private service: TaskService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await this.service.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  };

  list = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.service.list();
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  };

  complete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await this.service.complete(req.params.id);
      res.json(task);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
