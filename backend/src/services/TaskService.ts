import { EndDate } from "../domain/EndDate";
import { ITaskRepository } from "../domain/ITaskRepository";
import { Priority } from "../domain/Priority";
import { StartDate } from "../domain/StartDate";
import { Task } from "../domain/Task";
import { TaskStatus, TaskStatusEnum } from "../domain/TaskStatus";
import { TaskTitle } from "../domain/TaskTitle";


export class TaskService {
  constructor(private taskRepo: ITaskRepository) {}

  async create(data: any) {
    const task = new Task(
      "",
      new TaskTitle(data.title),
      new TaskStatus(TaskStatusEnum.PENDING),
      new Priority(data.priority),
      new StartDate(new Date(data.startDate)),
      new EndDate(new Date(data.startDate), new Date(data.endDate))
    );

    return this.taskRepo.save(task);
  }

  async list() {
    return this.taskRepo.findAll();
  }

  async complete(id: string) {
    const task = await this.taskRepo.findById(id);
    if (!task) throw new Error("Task not found");

    task.complete();
    return this.taskRepo.save(task);
  }

  async delete(id: string) {
    return this.taskRepo.delete(id);
  }
}
