import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as Icons from "@mui/icons-material";
import { useTheme } from "@mui/material";

export default function ServiceCard({ service }) {
//   const theme = useTheme();
  const IconComponent = Icons[service.icon] || Icons.HelpOutline;
  return (
    <Card variant="outlined">
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
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
