import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import SkillPaper from "./SkillPaper";
import Heading from "./Heading";

export default function Skills({ skills }) {
  return (
    <Box>
      <Grid container>
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
              icon="Lightbulb"
              title="My Special Skills Here."
              subtitle="Special Skills"
            />
          </Box>
        </Grid>
        <Grid
          // size={6}
          size={{ xs: 12, md: 6 }}
          sx={{
            height: "calc(100vh - 64px)",
            bgcolor: "secondary.main",
            pr: 8,
            py: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
            {skills.map((item, index) => (
              <SkillPaper key={index} skill={item} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
