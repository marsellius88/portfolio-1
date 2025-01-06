import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import about from "../data/about";

export default function Footer() {
  const contact = [
    { icon: <Call />, url: `tel:${about.contact.phone}` },
    { icon: <Email />, url: `mailto:${about.contact.email}` },
    { icon: <Instagram />, url: `https://${about.social.instagram}` },
    { icon: <Facebook />, url: `https://${about.social.facebook}` },
    { icon: <LinkedIn />, url: `https://${about.social.linkedin}` },
  ];

  return (
    <Box
      sx={{
        px: 8,
        py: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "inherit" }}>
          Copyright © 2025 Jane's
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {contact.map((media, index) => (
          <IconButton
            key={index}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "secondary.main" },
            }}
          >
            {media.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
