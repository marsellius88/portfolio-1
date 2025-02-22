import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ProjectCard from "../Home/ProjectCard";

export default function ProjectsList({ projects }) {
  return (
    <Box sx={{ px: { xs: 4, md: 8 }, my: 16 }}>
      <Grid container spacing={2}>
        {projects.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
