import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "@mui/icons-material";

export default function StatisticItem({ statistic }) {
  const IconComponent = Icons[statistic.icon] || Icons.HelpOutline;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconComponent sx={{ fontSize: 75, mr: 2, color: "text.primary" }} />
      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {statistic.value}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {statistic.text}
        </Typography>
      </Stack>
    </Box>
  );
}
