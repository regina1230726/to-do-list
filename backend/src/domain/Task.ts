import { EndDate } from "./EndDate";
import { Priority } from "./Priority";
import { StartDate } from "./StartDate";
import { TaskStatus, TaskStatusEnum } from "./TaskStatus";
import { TaskTitle } from "./TaskTitle";

export class Task {
  constructor(
    public id: string,
    public title: TaskTitle,
    public status: TaskStatus,
    public priority: Priority,
    public startDate: StartDate,
    public endDate: EndDate
  ) {}

  complete() {
    if (this.status.getValue() === TaskStatusEnum.COMPLETED) return;
    this.status = new TaskStatus(TaskStatusEnum.COMPLETED);
  }
}
