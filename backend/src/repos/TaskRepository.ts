import { ITaskRepository } from "../domain/ITaskRepository";
import { Task } from "../domain/Task";
import { TaskModel } from "../schemas/TaskSchema";


export class TaskRepository implements ITaskRepository {
  async save(task: Task): Promise<Task> {
    const created = await TaskModel.create({
      title: task.title.getValue(),
      status: task.status.getValue(),
      priority: task.priority.getValue(),
      startDate: task.startDate.getValue(),
      endDate: task.endDate.getValue(),
    });

    task.id = created.id;
    return task;
  }

  async findAll(): Promise<Task[]> {
    return TaskModel.find();
  }

  async findById(id: string): Promise<Task | null> {
    return TaskModel.findById(id);
  }

  async delete(id: string): Promise<void> {
    await TaskModel.findByIdAndDelete(id);
  }
}
