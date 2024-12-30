import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const socialMedia = [
    { icon: <Facebook />, url: "https://www.facebook.com" },
    { icon: <Twitter />, url: "https://www.twitter.com" },
    { icon: <Instagram />, url: "https://www.instagram.com" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com" },
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
        {socialMedia.map((media, index) => (
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
