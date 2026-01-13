export class EndDate {
  constructor(startDate: Date, private readonly value: Date) {
    if (value < startDate) {
      throw new Error("A data de término não pode ser anterior à data de início");
    }
  }

  getValue(): Date {
    return this.value;
  }
}
