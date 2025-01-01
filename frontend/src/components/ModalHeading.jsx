import Typography from "@mui/material/Typography";

export default function ModalHeading({ text }) {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        mb: 1,
        pl: 1,
        borderLeft: "5px solid",
        borderColor: "primary.main",
      }}
    >
      {text}
    </Typography>
  );
}
