import { ITaskRepository } from "../domain/ITaskRepository";
import { Task } from "../domain/Task";
import { TaskMapper } from "../mapper/TaskMapper";
import { TaskModel } from "../schemas/TaskSchema";

export class TaskRepository implements ITaskRepository {

  async save(task: Task): Promise<Task> {
    if (!task.id) {
      const created = await TaskModel.create(
        TaskMapper.toPersistence(task)
      );

      task.id = created.id.toString();
      return task;
    }

    await TaskModel.findByIdAndUpdate(
      task.id,
      TaskMapper.toPersistence(task)
    );

    return task;
  }

  async findById(id: string): Promise<Task | null> {
    const doc = await TaskModel.findById(id);
    if (!doc) return null;

    return TaskMapper.toDomain(doc);
  }

  async findAll(): Promise<Task[]> {
    return TaskModel.find();
  }

  async delete(id: string): Promise<void> {
    await TaskModel.findByIdAndDelete(id);
  }
}
