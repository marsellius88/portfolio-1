import Box from "@mui/material/Box";
import Profile from "./Profile";
import EducationExperience from "./EducationExperience";

export default function AboutContainer({ about }) {
  return (
    <Box>
      <Profile about={about} />
      <EducationExperience about={about} />
    </Box>
  );
}
