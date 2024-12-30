import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ServiceCard from "../Home/ServiceCard";

export default function ServicesList({ services }) {
  return (
    <Box sx={{ px: 8, my: 16 }}>
      <Grid container spacing={2}>
        {services.map((item, index) => (
          <Grid key={index} size={4}>
            <ServiceCard key={index} service={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
