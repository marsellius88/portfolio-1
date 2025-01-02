import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Heading from "../Home/Heading";
import { Typography } from "@mui/material";

export default function ContactContainer({ about }) {
  return (
    <Box sx={{ px: 8, my: 8 }}>
      <Grid container spacing={2}>
        <Grid size={4}></Grid>
        <Grid size={8}>
          <Heading
            icon="MailSharp"
            title="If You Have Any Project or Need Help, Contact Me."
            subtitle="Get In Touch"
          />
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            emndustry lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown print only five centuries, but
            also the leap into electronic.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
