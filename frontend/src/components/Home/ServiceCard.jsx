import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as Icons from "@mui/icons-material";

export default function ServiceCard({ service }) {
  const location = useLocation();
  const IconComponent = Icons[service.icon] || Icons.HelpOutline;
  return (
    <Card
      variant="outlined"
      sx={{ mx: location.pathname === "/services" ? 0 : 1 }}
    >
      <CardContent>
        <IconComponent sx={{ fontSize: 50, mb: 2 }} color="primary" />
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {service.title}
        </Typography>
        <List>
          {service.list.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText secondary={item} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      {location.pathname === "/services" && (
        <CardActions>
          <Button size="small" sx={{ pl: 1 }}>
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
