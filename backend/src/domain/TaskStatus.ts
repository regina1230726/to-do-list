export enum TaskStatusEnum {
  PENDING = "pending",
  COMPLETED = "completed",
}

export class TaskStatus {
  private readonly value: TaskStatusEnum;

  constructor(value: TaskStatusEnum) {
    this.value = value;
  }

  getValue(): TaskStatusEnum {
    return this.value;
  }
}
