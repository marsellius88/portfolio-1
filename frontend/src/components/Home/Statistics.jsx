import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import StatisticItem from "./StatisticItem";

export default function Statistics({ statistics }) {
  return (
    <Box sx={{ px: 8, my: 8 }}>
      <Grid container spacing={2}>
        {statistics.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <StatisticItem statistic={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
