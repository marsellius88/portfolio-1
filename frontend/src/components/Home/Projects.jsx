import Box from "@mui/material/Box";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsCarouselSettings } from "../../config/config";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Box sx={{ px: { xs: 4, md: 8 }, my: 16 }}>
      <Heading
        icon="Work"
        title="My Completed Projects."
        subtitle="Awesome Portfolio"
      />
      <Slider {...projectsCarouselSettings}>
        {projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </Slider>
    </Box>
  );
}
