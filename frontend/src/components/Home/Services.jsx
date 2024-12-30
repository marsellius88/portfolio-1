import Box from "@mui/material/Box";
import ServiceCard from "./ServiceCard";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesCarouselSettings } from "../../config/config";

export default function Services({ services }) {
  return (
    <Box sx={{ px: 8, my: 16 }}>
      <Heading
        icon="DesignServices"
        title="Services Provide for My Clients."
        subtitle="My Services"
      />
      <Slider {...servicesCarouselSettings}>
        {services.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </Slider>
    </Box>
  );
}
