import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function TestimonialCard({ testimonial }) {
  return (
    <Card variant="outlined" sx={{ mx: 1 }}>
      <CardContent>
        <FormatQuoteIcon sx={{ fontSize: 50, mb: 2 }} color="primary" />
        <Typography>{testimonial.text}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {testimonial.position}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating value={testimonial.star} readOnly />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
