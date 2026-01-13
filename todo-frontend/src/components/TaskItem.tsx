import { Paper, Typography, IconButton, Box, Stack, Tooltip } from "@mui/material";
import { CheckCircleOutline, DeleteOutline, CalendarMonth } from "@mui/icons-material";

interface Props {
  task: {
    _id: string;
    title: string;
    priority: "high" | "medium" | "low";
    status: "completed" | "pending";
    startDate: string;
    endDate: string;
  };
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function TaskItem({ task, onComplete, onDelete }: Props) {
  const isCompleted = task.status === "completed";

  const priorityStyles = {
    high: { bg: "#fff5f5", color: "#e53e3e", label: "Alta" },
    medium: { bg: "#fffaf0", color: "#dd6b20", label: "Média" },
    low: { bg: "#f0fff4", color: "#38a169", label: "Baixa" },
  };

  const style = priorityStyles[task.priority as keyof typeof priorityStyles] || {
  bg: "#f0f0f0",
  color: "#888",
  label: "Desconhecida",
};

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "divider",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
        },
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: isCompleted ? "#f8fafc" : "#fff",
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 40,
          borderRadius: 10,
          backgroundColor: style.color,
          opacity: isCompleted ? 0.3 : 1,
        }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "text.disabled" : "text.primary",
          }}
        >
          {task.title.valueOf()}
        </Typography>
        
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 0.5 }}>
          <Box
            sx={{
              px: 1.5,
              py: 0.2,
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "0.04em",
              backgroundColor: style.bg,
              color: style.color,
              textTransform: "uppercase",
            }}
          >
            {style.label}
          </Box>
          <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: "text.secondary" }}>
            <CalendarMonth sx={{ fontSize: 16 }} />
            <Typography variant="caption">
            {formatDate(task.startDate)} — {formatDate(task.endDate)}
          </Typography>
          </Stack>
        </Stack>
      </Box>

      <Stack direction="row" spacing={1}>
        {!isCompleted && (
          <Tooltip title="Concluir">
            <IconButton 
              onClick={() => onComplete(task._id)}
              sx={{ color: "#38a169", "&:hover": { backgroundColor: "#f0fff4" } }}
            >
              <CheckCircleOutline />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Excluir">
          <IconButton 
            onClick={() => onDelete(task._id)}
            sx={{ color: "#e53e3e", "&:hover": { backgroundColor: "#fff5f5" } }}
          >
            <DeleteOutline />
          </IconButton>
        </Tooltip>
      </Stack>
    </Paper>
  );
}