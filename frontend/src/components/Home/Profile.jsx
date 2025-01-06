import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";

export default function Profile({ profilePicture }) {
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
            <Typography
              variant="h3"
              sx={{ fontSize: "4rem", fontWeight: "bold" }}
            >
              Hello! I’m
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "4rem",
                fontWeight: "bold",
                mt: 1,
              }}
            >
              Jane Smith
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                my: 4,
                color: "text.secondary",
              }}
            >
              UI/UX Designer specializing in Shopify & Webflow.
            </Typography>
            <Button variant="contained" endIcon={<DownloadIcon />} size="large">
              Get Resume
            </Button>
          </Box>
        </Grid>
        <Grid
          // size={6}
          size={{ xs: 12, md: 6 }}
          sx={{
            height: "calc(100vh - 64px)",
            bgcolor: "secondary.main",
            pr: { xs: 0, md: 6 },
            pt: { xs: 0, md: 2 },
            // pr: 6,
            // pt: 2,
          }}
        >
          <img
            src={profilePicture}
            alt="Profile picture"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
