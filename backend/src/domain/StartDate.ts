export class StartDate {
  constructor(private readonly value: Date) {
    if (!value) {
      throw new Error("Start date is required");
    }
  }

  getValue(): Date {
    return this.value;
  }
}
