import { useEffect, useState } from "react";
import { Box, Typography, Container, Stack, Grid } from "@mui/material";
import type { Task } from "../models/Task";
import { taskApi } from "../api/TaskApi";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Snackbar, Alert } from "@mui/material";
import axios from "axios";

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

    const [feedback, setFeedback] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const showFeedback = (message: string, severity: "success" | "error") => {
    setFeedback({ open: true, message, severity });
  };

  function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
      return (
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Erro inesperado"
      );
    }
    return "Erro inesperado";
  }

  const loadTasks = async () => {
    const res = await taskApi.getAll();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (data: any) => {
    try {
      await taskApi.create(data);
      showFeedback("Tarefa criada com sucesso", "success");
      await loadTasks();
    } catch (err) {
      showFeedback(getErrorMessage(err), "error");
    }
  };

  const completeTask = async (id: string) => {
    try {
      await taskApi.complete(id);
      showFeedback("Tarefa concluída", "success");
      await loadTasks();
    } catch (err) {
      showFeedback(getErrorMessage(err), "error");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskApi.remove(id);
      showFeedback("Tarefa removida", "success");
      await loadTasks();
    } catch (err) {
      showFeedback(getErrorMessage(err), "error");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fa",
        pt: { xs: 4, md: 8 }, 
        pb: 2,               
        px: 4,
      }}>
      <Container maxWidth="lg">
        {/* Cabeçalho Principal */}
        <Box sx={{ mb: 6, textAlign: "left" }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#1e293b", letterSpacing: "-1px" }}>
            Gestão de Tarefas
          </Typography>
        </Box>

        <Grid container spacing={5}>
        {/* COLUNA ESQUERDA */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { xs: 4, md: 0 } }}>
            <Stack spacing={3}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Criar Nova Tarefa
            </Typography>
            <TaskForm onCreate={createTask} />
            </Stack>
        </Grid>

        {/* COLUNA DIREITA */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ mt: { xs: 4, md: 0 } }}>
            <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Lista de Tarefas
                </Typography>
                <Typography variant="caption">
                TOTAL: {tasks.length} TAREFAS
                </Typography>
            </Stack>

            <TaskList
                tasks={tasks}
                onComplete={completeTask}
                onDelete={deleteTask}
            />
            </Stack>
        </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={feedback.open}
        autoHideDuration={3000}
        onClose={() => setFeedback({ ...feedback, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setFeedback({ ...feedback, open: false })}
          severity={feedback.severity}
          variant="filled"
          sx={{ borderRadius: "12px" }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}