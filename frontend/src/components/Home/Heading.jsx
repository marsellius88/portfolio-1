import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "@mui/icons-material";

export default function Heading({ icon, title, subtitle }) {
  const IconComponent = Icons[icon] || Icons.HelpOutline;
  return (
    <Box>
      <Stack alignItems="center" direction="row" gap={1}>
        <IconComponent sx={{ color: "text.secondary" }} />
        <Typography sx={{ color: "text.secondary" }} variant="body1">
          {subtitle}
        </Typography>
      </Stack>
      <Typography
        variant="h3"
        sx={{ fontSize: "4rem", fontWeight: "bold", my: 3 }}
      >
        {title}
      </Typography>
    </Box>
  );
}
