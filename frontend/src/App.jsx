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
import About from "./pages/About";

import Contact from "./pages/Contact";
import about from "./data/about";

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
    initialPrice: "$60.00",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi.",
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
    initialPrice: "$70.00",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi.",
    list: ["HTML/CSS", "JavaScript", "Animation", "WordPress", "React"],
  },
  {
    icon: "Draw",
    title: "Illustration",
    initialPrice: "$80.00",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi.",
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
    initialPrice: "$100.00",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi.",
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
    initialPrice: "$50.00",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi.",
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
    initialPrice: "$40.00",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi.",
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
    projectName: "Givest",
    client: "aa",
    budget: "$890.00",
    duration: "25 days",
    date: new Date("2024-02-09"),
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi. Commodo tortor mus per primis efficitur bibendum. Vel natoque mi class vitae sociosqu cubilia nostra etiam. Molestie nostra dolor volutpat parturient lobortis leo hendrerit pellentesque. Facilisis nunc hac felis aliquet; netus molestie curae lacinia. Primis lacinia justo semper hac; hendrerit dapibus consectetur.",
  },
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-2.jpg",
    title: "Musion - Gardening Website Template",
    projectName: "Musion",
    client: "bb",
    budget: "$500.00",
    duration: "15 days",
    date: new Date("2024-03-10"),
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi. Commodo tortor mus per primis efficitur bibendum. Vel natoque mi class vitae sociosqu cubilia nostra etiam. Molestie nostra dolor volutpat parturient lobortis leo hendrerit pellentesque. Facilisis nunc hac felis aliquet; netus molestie curae lacinia. Primis lacinia justo semper hac; hendrerit dapibus consectetur.",
  },
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-3.jpg",
    title: "SEOLLY - SEO Marketing and Digital Agency",
    projectName: "SEOLLY",
    client: "cc",
    budget: "$750.00",
    duration: "21 days",
    date: new Date("2024-07-15"),
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat maecenas est a sodales aenean elementum et? Massa vel scelerisque nostra blandit conubia mus? Sociosqu nunc ornare malesuada ultricies ex viverra faucibus dui. Efficitur placerat natoque parturient pellentesque mi. Commodo tortor mus per primis efficitur bibendum. Vel natoque mi class vitae sociosqu cubilia nostra etiam. Molestie nostra dolor volutpat parturient lobortis leo hendrerit pellentesque. Facilisis nunc hac felis aliquet; netus molestie curae lacinia. Primis lacinia justo semper hac; hendrerit dapibus consectetur.",
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

// const about = {
//   name: "Jane Smith",
//   specialization: "UI/UX designer specializing in shopify & webflow.",
//   profile:
//     "Lorem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled.",
//   profileVideoId: "PcV2g-kW-xo",
//   profilePicture: ProfilePicture,
//   resumeDownloadLink: "/",
//   education: [
//     {
//       period: "2015 - 2019",
//       degree: "Bachelor of Science in Computer Science",
//       university: "University of California, Berkeley",
//       description:
//         "Focused on software development, algorithms, and data structures. Graduated with honors and led a project on machine learning applications in healthcare.",
//     },
//     {
//       period: "2019 - 2021",
//       degree: "Master of Science in Human-Computer Interaction",
//       university: "Carnegie Mellon University",
//       description:
//         "Specialized in user experience design and usability testing. Conducted research on improving accessibility in web applications for individuals with disabilities.",
//     },
//     {
//       period: "2022 - Present",
//       degree: "Ph.D. in Artificial Intelligence",
//       university: "Massachusetts Institute of Technology (MIT)",
//       description:
//         "Conducting research in deep learning and natural language processing. Published multiple papers in top-tier AI conferences and journals.",
//     },
//   ],
//   experience: [
//     {
//       period: "2020 - 2022",
//       position: "Frontend Developer",
//       company: "TechNova Solutions",
//       description:
//         "Developed and maintained responsive web applications using React and Material-UI. Collaborated with designers and backend developers to create seamless user experiences. Improved website performance by 30% through optimization techniques.",
//     },
//     {
//       period: "2018 - 2020",
//       position: "UI/UX Designer",
//       company: "Creative Minds Studio",
//       description:
//         "Designed intuitive user interfaces for mobile and web applications. Conducted user research and usability testing to refine designs. Successfully led the redesign of a major e-commerce platform, resulting in a 25% increase in user engagement.",
//     },
//     {
//       period: "2022 - Present",
//       position: "Product Manager",
//       company: "Innovatech Inc.",
//       description:
//         "Overseeing the development of SaaS products for small businesses. Managing cross-functional teams, setting product roadmaps, and prioritizing features based on user feedback. Achieved a 15% increase in customer retention through strategic feature rollouts.",
//     },
//   ],
//   contact: {
//     phone: "6287615264589",
//     email: "janesmith@example.com",
//     website: "www.example.com",
//     address: "Yogyakarta",
//   },
//   social: {
//     instagram: "www.instagram.com",
//     facebook: "www.facebook.com",
//     linkedin: "www.linkedin.com",
//   },
// };

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
      <Route path="about" element={<About about={about} />} />
      <Route path="contact" element={<Contact about={about} />} />
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
