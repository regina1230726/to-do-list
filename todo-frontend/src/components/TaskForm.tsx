import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

interface Props {
  onCreate: (data: any) => void;
}

export default function TaskForm({ onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ title, priority, startDate, endDate });
    setTitle("");
    setStartDate("");
    setEndDate("");
  };

    return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 4, // Aumentei o padding interno
        borderRadius: "20px", 
        border: "1px solid", 
        borderColor: "divider",
        background: "linear-gradient(to bottom right, #ffffff, #fcfdff)"
      }}
    >
      <form onSubmit={submit}>
        <Stack spacing={3}>
          {/* TÍTULO - Sempre ocupando a largura total */}
          <TextField
            label="Título da Tarefa"
            variant="outlined"
            fullWidth
            required
            placeholder="Ex: Reunião de Design"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            slotProps={{ input: { sx: { borderRadius: "12px" } } }}
          />

          {/* PRIORIDADE - Agora numa linha focada */}
          <TextField
            select
            label="Prioridade"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
            slotProps={{ input: { sx: { borderRadius: "12px" } } }}
          >
            <MenuItem value="low">Baixa</MenuItem>
            <MenuItem value="medium">Média</MenuItem>
            <MenuItem value="high">Alta</MenuItem>
          </TextField>

          {/* DATAS - Apenas as duas lado a lado para terem espaço */}
          <Stack direction="row" spacing={2}>
            <TextField
              label="Início"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              slotProps={{ input: { sx: { borderRadius: "12px" } } }}
            />

            <TextField
              label="Prazo"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              slotProps={{ input: { sx: { borderRadius: "12px" } } }}
            />
          </Stack>

          <Button
            type="submit"
            variant="contained"
            disableElevation
            sx={{
              mt: 1,
              py: 2, // Botão mais robusto
              borderRadius: "12px",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(45deg, #4f46e5, #6366f1)",
              "&:hover": { background: "linear-gradient(45deg, #4338ca, #4f46e5)" }
            }}
          >
            Criar Tarefa
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
