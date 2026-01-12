import { Task } from "./Task";

export interface ITaskRepository {
  save(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Task | null>;
}
