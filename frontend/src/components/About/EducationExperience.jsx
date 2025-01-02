import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EducationExperienceTimeline from "./EducationExperienceTimeline";

export default function EducationExperience({ about }) {
  const [active, setActive] = useState("Education");

  const handleClickEducation = () => {
    setActive("Education");
  };

  const handleClickExperience = () => {
    setActive("Experience");
  };

  return (
    <Box sx={{ px: 8, my: 8 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Button
            size="large"
            variant={active === "Education" ? "contained" : "outlined"}
            fullWidth
            disableElevation
            onClick={handleClickEducation}
            sx={{
              fontSize: "1.5rem",
              borderRadius: 0,
            }}
          >
            Education
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            size="large"
            variant={active === "Experience" ? "contained" : "outlined"}
            fullWidth
            disableElevation
            onClick={handleClickExperience}
            sx={{
              fontSize: "1.5rem",
              borderRadius: 0,
            }}
          >
            Experience
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 8 }}>
        <EducationExperienceTimeline title={active} about={about} />
      </Box>
    </Box>
  );
}
