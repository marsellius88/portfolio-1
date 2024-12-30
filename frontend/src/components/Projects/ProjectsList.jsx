import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ProjectCard from "../Home/ProjectCard";

export default function ProjectsList({ projects }) {
  return (
    <Box sx={{ px: 8, my: 16 }}>
      <Grid container spacing={2}>
        {projects.map((item, index) => (
          <Grid key={index} size={4}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
