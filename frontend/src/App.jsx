import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Company1 from "./assets/company-1.jpg";
import Company2 from "./assets/company-2.jpg";
import Company3 from "./assets/company-3.png";
import Company4 from "./assets/company-4.jpg";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Projects from "./pages/Projects";

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

const services = [
  {
    icon: "Build",
    title: "UI/UX Design",
    list: [
      "Landing Pages",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Mobile App Design",
    ],
  },
  {
    icon: "Code",
    title: "Development",
    list: ["HTML/CSS", "JavaScript", "Animation", "WordPress", "React"],
  },
  {
    icon: "Draw",
    title: "Illustration",
    list: [
      "Character Design",
      "Icon Set",
      "Illustration Guide",
      "Illustration Set",
      "Motion Graphic",
    ],
  },
  {
    icon: "Search",
    title: "SEO Marketing",
    list: [
      "White Hat SEO",
      "Black Hat SEO",
      "Grey Hat SEO",
      "Negative SEO",
      "On-Page SEO",
    ],
  },
  {
    icon: "Analytics",
    title: "Data Analysis",
    list: [
      "Diagnostic Analysis",
      "Predictive Analysis",
      "Prescriptive Analysis",
      "Risk Assessment",
      "Sales Forecasting",
    ],
  },
  {
    icon: "CorporateFare",
    title: "Brand Identity",
    list: [
      "Brand Architecture",
      "Brand Authenticity",
      "Brand Awareness",
      "Brand Management",
      "Brand Metrics",
    ],
  },
];

const skills = [
  {
    name: "Communication",
    percentage: 75,
  },
  {
    name: "Leadership",
    percentage: 70,
  },
  {
    name: "Teamwork",
    percentage: 90,
  },
  {
    name: "Flexibility",
    percentage: 80,
  },
];

const statistics = [
  {
    icon: "Person",
    value: 99,
    text: "Happy Clients",
  },
  {
    icon: "Settings",
    value: 180,
    text: "Projects Completed",
  },
  {
    icon: "CalendarMonth",
    value: 21,
    text: "Years of Experience",
  },
];

const projects = [
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg",
    title: "Givest - Non-Profit PSD Template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "/",
  },
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-2.jpg",
    title: "Musion - Gardening Website Template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "/",
  },
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-3.jpg",
    title: "SEOLLY - SEO Marketing and Digital Agency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "/",
  },
];

const testimonials = [
  {
    name: "Natasha Polisky",
    position: "Founder, Seolly",
    avatar:
      "https://images.pexels.com/photos/734478/pexels-photo-734478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I am beyond impressed with the design delivered! The UI/UX is not only visually stunning but also incredibly intuitive. Our app's user experience has significantly improved thanks to the thoughtful and detailed work. The collaboration process was smooth, professional, and tailored to our needs.",
    star: 4,
  },
  {
    name: "Johnny Tinley",
    position: "CEO, Givest",
    avatar:
      "https://images.pexels.com/photos/5234256/pexels-photo-5234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Working with this designer has been an absolute pleasure! Their ability to transform complex ideas into seamless, user-friendly designs is remarkable. The end result exceeded our expectations and has been well-received by our users. They truly understand the art and science of UI/UX design.",
    star: 5,
  },
  {
    name: "Kate Doe",
    position: "Product Manager, Musion",
    avatar:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The professionalism and creativity of this designer are outstanding. They took the time to understand our brand and audience, delivering designs that are both functional and aesthetically pleasing. Their work has elevated our product and set a new standard for user experience in our industry.",
    star: 5,
  },
];

const companies = [Company1, Company2, Company3, Company4];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <Home
            services={services}
            skills={skills}
            statistics={statistics}
            projects={projects}
            testimonials={testimonials}
            companies={companies}
          />
        }
      />
      <Route path="services" element={<Services services={services} />} />
      <Route path="projects" element={<Projects projects={projects} />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
