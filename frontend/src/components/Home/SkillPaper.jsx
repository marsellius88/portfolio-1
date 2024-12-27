import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import LinearProgressWithLabel from "../LinearProgressWithLabel";

export default function SkillPaper({ skill }) {
  const theme = useTheme();
  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography sx={{ pb: 1 }}>{skill.name}</Typography>
      <LinearProgressWithLabel value={skill.percentage} />
    </Paper>
  );
}
