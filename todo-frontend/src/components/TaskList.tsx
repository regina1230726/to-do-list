import { Box, Typography } from "@mui/material";
import type { Task } from "../models/Task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onComplete, onDelete }: Props) {
  if (tasks.length === 0) {
    return (
      <Typography align="center" color="text.secondary">
      </Typography>
    );
  }

  return (
    <Box>
      
    {tasks.map(task => {
  console.log(task);
  return (
    <TaskItem
      key={task._id}
      task={task}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
})}

    </Box>
  );
}
