import axios from "axios";
import type { Task } from "../models/Task";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const taskApi = {
  getAll: () => api.get<Task[]>("/tasks"),
  create: (data: Omit<Task, "_id" | "status">) =>
    api.post<Task>("/tasks", data),
  complete: (id: string) =>
    api.patch<Task>(`/tasks/${id}/complete`),
  remove: (id: string) =>
    api.delete(`/tasks/${id}`),
};
