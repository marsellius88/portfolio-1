import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";

export default function Email() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ mt: 3, mb: { xs: 16, md: 0 } }}
    >
      <Grid container spacing={{ xs: 0, md: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            required
            label="Name"
            variant="outlined"
            margin="normal"
            id="name"
          />
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            id="email"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            variant="outlined"
            margin="normal"
            id="phone"
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="normal"
            id="subject"
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        multiline
        rows={4}
        required
        label="Message"
        variant="outlined"
        margin="normal"
        id="message"
      />
      <Button size="large" type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit Message
      </Button>
    </Box>
  );
}
