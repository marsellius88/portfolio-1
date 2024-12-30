import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ProjectCard({ project }) {
  return (
    <Card variant="outlined" sx={{ mx: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
