export class StartDate {
  constructor(private readonly value: Date) {
    if (!value) {
      throw new Error("A data de início é obrigatória");
    }
  }

  getValue(): Date {
    return this.value;
  }
}
