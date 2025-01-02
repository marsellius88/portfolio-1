import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";
import "./YouTubeModal.css";

export default function YouTubeModal({ videoId }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* <IconButton
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <PlayCircleFilledSharpIcon sx={{ fontSize: 70 }} />
      </IconButton> */}
      <IconButton
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            animation: "pulse 1.5s infinite",
            zIndex: -1,
          },
        }}
      >
        <PlayCircleFilledSharpIcon sx={{ fontSize: 70 }} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="youtube-video-dialog"
      >
        <DialogContent sx={{ padding: 0 }}>
          <Box
            sx={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video Player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
