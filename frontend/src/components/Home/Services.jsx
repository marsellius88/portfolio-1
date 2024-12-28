import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ServiceCard from "./ServiceCard";
import Heading from "./Heading";

export default function Services({ services }) {
  return (
    <Box sx={{ px: 8, my: 8 }}>
      <Heading
        icon="DesignServices"
        title="Services Provide for My Clients."
        subtitle="My Services"
      />
      <Grid container spacing={2}>
        {services.map((item, index) => (
          <Grid key={index} size={4}>
            <ServiceCard service={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
