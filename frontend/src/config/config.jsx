import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import IconButton from "@mui/material/IconButton";

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <KeyboardDoubleArrowRightIcon />
    </IconButton>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "-40px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <KeyboardDoubleArrowLeftIcon />
    </IconButton>
  );
};

export const servicesCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const projectsCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialsCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
