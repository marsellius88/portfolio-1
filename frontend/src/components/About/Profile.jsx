import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import YouTubeModal from "../YouTubeModal";

export default function Profile({ about }) {
  return (
    <Box>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            height: "calc(100vh - 64px)",
            // pl: 8,
            pt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "80%",
              height: "auto",
            }}
          >
            <img
              // src={`https://img.youtube.com/vi/${about.profileVideoId}/hqdefault.jpg`}
              // src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Video Thumbnail"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <YouTubeModal videoId={about.profileVideoId} />
          </Box>
        </Grid>
        <Grid
          // size={6}
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            height: "calc(100vh - 64px)",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              pr: 8,
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: "4rem", fontWeight: "bold" }}
            >
              I’m Jane Smith
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                my: 1,
                color: "text.secondary",
              }}
            >
              {about.specialization}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                my: 1,
                color: "text.secondary",
              }}
            >
              {about.profile}
            </Typography>
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              size="large"
              sx={{
                mt: 2,
              }}
            >
              Get Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
