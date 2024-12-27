import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SkillPaper from "./SkillPaper";

const skills = [
  {
    name: "Communication",
    percentage: 75,
  },
  {
    name: "Leadership",
    percentage: 70,
  },
  {
    name: "Teamwork",
    percentage: 90,
  },
  {
    name: "Flexibility",
    percentage: 80,
  },
];

export default function Skills() {
  const theme = useTheme();
  const backgroundColor = theme.palette.secondary.main;
  return (
    <Box>
      <Grid container>
        <Grid
          size={6}
          sx={{
            height: "calc(100vh - 64px)",
          }}
        >
          <Box
            sx={{
              flex: 1,
              bgcolor: backgroundColor,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              pl: 8,
            }}
          >
            <Stack alignItems="center" direction="row" gap={1}>
              <LightbulbIcon sx={{ color: theme.palette.text.secondary }} />
              <Typography
                sx={{ color: theme.palette.text.secondary }}
                variant="body1"
              >
                Special Skills
              </Typography>
            </Stack>
            <Typography
              variant="h3"
              sx={{ fontSize: "4rem", fontWeight: "bold", my: 3 }}
            >
              My Skills
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={6}
          sx={{
            height: "calc(100vh - 64px)", // Tinggi kolom
            bgcolor: backgroundColor,
            pr: 8,
            pt: 2,
          }}
        >
          <Stack spacing={2}>
            {skills.map((item, index) => (
              <SkillPaper key={index} skill={item} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
