import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Heading from "../Home/Heading";
import ContactInformationItem from "./ContactInformationItem";
import Email from "./Email";

export default function ContactContainer({ about }) {
  return (
    <Box sx={{ px: { xs: 4, md: 8 }, my: 8 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              px: 2,
              py: 2,
              bgcolor: "secondary.main",
            }}
          >
            <List>
              {Object.entries(about.contact).map(([key, value]) => (
                <ContactInformationItem
                  key={key}
                  point={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  link={
                    key === "phone"
                      ? `tel:${value}`
                      : key === "email"
                      ? `mailto:${value}`
                      : key === "website"
                      ? `https://${value}`
                      : key === "address"
                      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          value
                        )}`
                      : undefined
                  }
                />
              ))}
            </List>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} order={{ xs: 1, md: 2 }}>
          <Box sx={{ ml: { xs: 0, md: 8 } }}>
            <Heading
              icon="MailSharp"
              title="If You Have Any Project or Need Help, Contact Me."
              subtitle="Get In Touch"
            />
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              emndustry lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown print only five centuries,
              but also the leap into electronic.
            </Typography>
            <Email />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
