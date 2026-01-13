export class TaskTitle {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim().length < 3) {
      throw new Error("O título da tarefa deve ter pelo menos 3 caracteres");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
