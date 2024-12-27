import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import Profile from "../components/Home/Profile";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <Services />
      <Skills />
    </>
  );
}
