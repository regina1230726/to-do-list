export interface Task {
  _id: string;
  title: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
  startDate: string;
  endDate: string;
}
