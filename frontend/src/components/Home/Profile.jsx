import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ProfilePicture from "../../assets/woman-2.png";

export default function Profile() {
  const theme = useTheme();
  const backgroundColor = theme.palette.secondary.main;
  return (
    <Box>
      <Grid container>
        <Grid
          size={6}
          sx={{
            height: "calc(100vh - 64px)",
          }}
        >
          <Box
            sx={{
              flex: 1,
              bgcolor: backgroundColor,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: '100%',
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
                color: theme.palette.text.secondary
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
          size={6}
          sx={{
            height: "calc(100vh - 64px)", // Tinggi kolom
            bgcolor: backgroundColor,
            pr: 6,
            pt: 2
          }}
        >
          {/* <Box
            sx={{
              flex: 1,
              bgcolor: { backgroundColor },
              height: '100%',
              px: 6,
              pt: 2,
            }}
          > */}
            <img
              src={ProfilePicture}
              alt="Profile picture"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>

    // ganti jadi grid
    // <Box sx={{ height: "calc(100vh - 64px)", display: "flex" }}>
    //   <Box
    //     sx={{
    //       flex: 1,
    //       bgcolor: { backgroundColor },
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignItems: "flex-start",
    //       px: 6,
    //     }}
    //   >
    //     <Typography variant="h3" sx={{ fontSize: "4rem", fontWeight: "bold" }}>
    //       Hello! I’m
    //     </Typography>
    //     <Typography
    //       variant="h3"
    //       sx={{
    //         fontSize: "4rem",
    //         fontWeight: "bold",
    //         mt: 1,
    //       }}
    //     >
    //       Jane Smith
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       sx={{
    //         fontSize: "1.2rem",
    //         my: 4
    //       }}
    //     >
    //       UI/UX Designer specializing in Shopify & Webflow.
    //     </Typography>
    //     <Button variant="contained" endIcon={<DownloadIcon />} size="large">
    //       Get Resume
    //     </Button>
    //   </Box>
    //   <Box
    //     sx={{
    //       flex: 1,
    //       bgcolor: { backgroundColor },
    //       px: 6,
    //       pt: 2,
    //     }}
    //   >
    //     <img
    //       src={ProfilePicture}
    //       alt="Profile picture"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         objectFit: "cover",
    //       }}
    //     />
    //   </Box>
    // </Box>
  );
}
