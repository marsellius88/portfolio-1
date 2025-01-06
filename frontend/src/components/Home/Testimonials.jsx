import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsCarouselSettings } from "../../config/config";

export default function Testimonials({ testimonials }) {
  return (
    <Box>
      <Grid container>
        <Grid
          // size={6}
          size={{ xs: 12, md: 6 }}
          sx={{
            height: "calc(100vh - 64px)",
            bgcolor: "secondary.main",
            px: 8,
            py: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Slider {...testimonialsCarouselSettings}>
              {testimonials.map((item, index) => (
                <TestimonialCard key={index} testimonial={item} />
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid
          // size={6}
          size={{ xs: 12, md: 6 }}
          sx={{
            height: "calc(100vh - 64px)",
          }}
        >
          <Box
            sx={{
              flex: 1,
              bgcolor: "secondary.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              pl: 8,
            }}
          >
            <Heading
              icon="Comment"
              title="Satisfied Clients Say."
              subtitle="Testimonials"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
