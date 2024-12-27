import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import ServiceCard from "./ServiceCard";
import Typography from "@mui/material/Typography";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useTheme } from "@mui/material";

const services = [
  {
    icon: "Build",
    title: "UI/UX Design",
    list: [
      "Landing Pages",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Mobile App Design",
    ],
  },
  {
    icon: "Code",
    title: "Development",
    list: ["HTML/CSS", "JavaScript", "Animation", "WordPress", "React"],
  },
  {
    icon: "Draw",
    title: "Illustration",
    list: [
      "Character Design",
      "Icon Set",
      "Illustration Guide",
      "Illustration Set",
      "Motion Graphic",
    ],
  },
  {
    icon: "Search",
    title: "SEO Marketing",
    list: [
      "White Hat SEO",
      "Black Hat SEO",
      "Grey Hat SEO",
      "Negative SEO",
      "On-Page SEO",
    ],
  },
  {
    icon: "Analytics",
    title: "Data Analysis",
    list: [
      "Diagnostic Analysis",
      "Predictive Analysis",
      "Prescriptive Analysis",
      "Risk Assessment",
      "Sales Forecasting",
    ],
  },
  {
    icon: "CorporateFare",
    title: "Brand Identity",
    list: [
      "Brand Architecture",
      "Brand Authenticity",
      "Brand Awareness",
      "Brand Management",
      "Brand Metrics",
    ],
  },
];

export default function Services() {
  const theme = useTheme();
  return (
    <Box sx={{ px: 8, my: 8 }}>
      <Box>
        <Stack alignItems="center" direction="row" gap={1}>
          <DesignServicesIcon sx={{ color: theme.palette.text.secondary }} />
          <Typography
            sx={{ color: theme.palette.text.secondary }}
            variant="body1"
          >
            My Services
          </Typography>
        </Stack>
        <Typography
          variant="h3"
          sx={{ fontSize: "4rem", fontWeight: "bold", my: 3 }}
        >
          Services For My Clients
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {services.map((item, index) => (
          <Grid key={index} size={4}>
            <ServiceCard service={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
