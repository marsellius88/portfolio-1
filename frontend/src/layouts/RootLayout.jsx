import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Box component="main" sx={{ pt: 8 }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}
