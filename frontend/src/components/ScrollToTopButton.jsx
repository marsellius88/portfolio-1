import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 8,
        zIndex: 1000,
      }}
    >
      <Fade in={showButton}>
        <Fab
          color="primary"
          onClick={handleScrollToTop}
          aria-label="scroll to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Fade>
    </Box>
  );
}
