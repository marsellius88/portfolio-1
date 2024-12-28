import Box from "@mui/material/Box";
import Heading from "./Heading";

export default function Projects({ projects }) {
  return (
    <Box sx={{ px: 8, py: 8, bgcolor: "secondary.main" }}>
      <Heading
        icon="Work"
        title="My Completed Projects."
        subtitle="Awesome Portfolio"
      />
    </Box>
  );
}
