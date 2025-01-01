import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProjectInformationItem({ point, value }) {
  return (
    <ListItem disablePadding sx={{mb: 1}}>
      <Box>
        <Typography variant="body2">{point}:</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}
        </Typography>
      </Box>
    </ListItem>
  );
}
