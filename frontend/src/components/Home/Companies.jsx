import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Heading from "./Heading";

export default function Companies({ companies }) {
  return (
    <Box sx={{ px: 8, my: 16 }}>
      <Heading
        icon="Business"
        title="Work with Trusted Companies."
        subtitle="Favorite Clients"
      />
      <Grid container spacing={2}>
        {companies.map((item, index) => (
          <Grid
            key={index}
            size={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={item}
              alt={`Logo ${index + 1}`}
              sx={{
                height: 200,
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
