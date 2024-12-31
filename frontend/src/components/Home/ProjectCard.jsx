import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProjectDetail from "../Projects/ProjectDetail";

export default function ProjectCard({ project }) {
  const location = useLocation();
  return (
    <Card
      variant="outlined"
      sx={{ mx: location.pathname === "/projects" ? 0 : 1 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.shortDescription}
        </Typography>
      </CardContent>
      {location.pathname === "/projects" && (
        <CardActions>
          <ProjectDetail project={project} />
        </CardActions>
      )}
    </Card>
  );
}
