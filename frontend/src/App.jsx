import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#1976d2",
      main: "#ad6254",
      // light: "#63a4ff",
      // dark: "#004ba0",
      // contrastText: "#ffffff",
    },
    secondary: {
      // main: "#9c27b0",
      main: "#f3e8e6",
      // light: "#d05ce3",
      // dark: "#6a0080",
      // contrastText: "#ffffff",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#393939", // Warna teks primer
      secondary: "#929292", // Warna teks sekunder
    },
  },
  typography: {
    allVariants: {
      color: "#393939",
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
