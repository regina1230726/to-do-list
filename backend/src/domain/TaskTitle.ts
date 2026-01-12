export class TaskTitle {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim().length < 3) {
      throw new Error("Task title must have at least 3 characters");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
