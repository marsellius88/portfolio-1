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
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DownloadIcon from "@mui/icons-material/Download";
import ModalHeading from "../ModalHeading";

export default function ServiceDetail({ service }) {
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
        <DialogTitle id="scroll-dialog-title">Service Details</DialogTitle>
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
          <Grid container spacing={2}>
            <Grid size={8}>
              <ModalHeading text={service.title} />
              <Typography variant="body1">{service.description}</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry:
              </Typography>
              <List sx={{ listStyle: "disc", pl: 3 }}>
                {service.list.map((item, index) => (
                  <ListItem
                    sx={{ display: "list-item" }}
                    key={index}
                    disablePadding
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={4}>
              <Box
                sx={{
                //   border: "1px solid black",
                  px: 1,
                  py: 1,
                  bgcolor: "secondary.main",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Resume</Typography>
                
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
