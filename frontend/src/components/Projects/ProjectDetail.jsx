import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ProjectInformationItem from "./ProjectInformationItem";
import { formatDate } from "../../utils/utils";
import ModalHeading from "../ModalHeading";

export default function ProjectDetail({ project }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="small" sx={{ pl: 1 }} onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Project Details</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "text.secondary",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <img
            src={project.image}
            alt={project.title}
            style={{
              // outline: "1px solid #ddd",
              width: "100%",
              height: "250px",
              objectFit: "cover",
              border: "1px solid",
              borderColor: "#ddd",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ mt: 2 }}>
                <ModalHeading text={project.title} />
                <Typography variant="body1">{project.description}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  mt: 2,
                  px: 1,
                  py: 1,
                  bgcolor: "secondary.main",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Information</Typography>
                <List>
                  <ProjectInformationItem
                    point="Project Name"
                    value={project.projectName}
                  />
                  <ProjectInformationItem
                    point="Client"
                    value={project.client}
                  />
                  <ProjectInformationItem
                    point="Budget"
                    value={project.budget}
                  />
                  <ProjectInformationItem
                    point="Duration"
                    value={project.duration}
                  />
                  <ProjectInformationItem
                    point="Date"
                    value={formatDate(project.date)}
                  />
                </List>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
