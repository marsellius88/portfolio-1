import { useState } from "react";
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
              width: "100%",
              height: "250px",
              objectFit: "cover",
              //   border: "0.25px solid",
              //   borderColor: "primary.main",
            }}
          />
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                {project.title}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
            </Grid>
            <Grid size={4}>
              <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                Information
              </Typography>
              <List>
                <ProjectInformationItem
                  point="Project Name"
                  value={project.projectName}
                />
                <ProjectInformationItem point="Client" value={project.client} />
                <ProjectInformationItem point="Budget" value={project.budget} />
                <ProjectInformationItem
                  point="Duration"
                  value={project.duration}
                />
                <ProjectInformationItem
                  point="Date"
                  value={formatDate(project.date)}
                />
              </List>
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
