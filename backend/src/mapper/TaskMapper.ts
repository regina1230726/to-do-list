import { Task } from "../domain/Task";
import { TaskTitle } from "../domain/TaskTitle";
import { TaskStatus, TaskStatusEnum } from "../domain/TaskStatus";
import { Priority } from "../domain/Priority";
import { StartDate } from "../domain/StartDate";
import { EndDate } from "../domain/EndDate";

export class TaskMapper {
  /**
   * Mongo / Persistence → Domain
   */
  static toDomain(doc: any): Task {
    if (!doc) {
      throw new Error("Cannot map null Task document");
    }

    return new Task(
      doc.id?.toString() ?? doc._id?.toString(),
      new TaskTitle(doc.title),
      new TaskStatus(doc.status as TaskStatusEnum),
      new Priority(doc.priority),
      new StartDate(new Date(doc.startDate)),
      new EndDate(
        new Date(doc.startDate),
        new Date(doc.endDate)
      )
    );
  }

  /**
   * Domain → Mongo / Persistence
   */
  static toPersistence(task: Task): any {
    return {
      title: task.title.getValue(),
      status: task.status.getValue(),
      priority: task.priority.getValue(),
      startDate: task.startDate.getValue(),
      endDate: task.endDate.getValue(),
    };
  }
}
