import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageHeading({ title }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30vw",
        bgcolor: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "4rem", fontWeight: "bold", my: 3 }}
      >
        {title}
      </Typography>
    </Box>
  );
}