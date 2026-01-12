export class EndDate {
  constructor(startDate: Date, private readonly value: Date) {
    if (value < startDate) {
      throw new Error("End date cannot be before start date");
    }
  }

  getValue(): Date {
    return this.value;
  }
}
