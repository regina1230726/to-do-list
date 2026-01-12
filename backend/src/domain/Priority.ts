export enum PriorityEnum {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export class Priority {
  private readonly value: PriorityEnum;

  constructor(value: PriorityEnum) {
    this.value = value;
  }

  getValue(): PriorityEnum {
    return this.value;
  }
}
