import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function ContactInformationItem({ point, value, link }) {
  return (
    <ListItem sx={{ width: "100%", mb: 2 }}>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          width: "100%",
          p: 3,
        }}
      >
        <Typography sx={{ color: "inherit", fontWeight: "bold", mb: 1 }}>
          {point}:
        </Typography>
        {link ? (
          <Typography
            component="a"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </Typography>
        ) : (
          <Typography sx={{ color: "inherit" }}>{value}</Typography>
        )}
      </Box>
    </ListItem>
  );
}
