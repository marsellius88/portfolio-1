import Profile from "../components/Home/Profile";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";
import ProfilePicture from "../assets/woman-2.png";
import Statistics from "../components/Home/Statistics";
import Projects from "../components/Home/Projects";

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
  // {
  //   icon: "Search",
  //   title: "SEO Marketing",
  //   list: [
  //     "White Hat SEO",
  //     "Black Hat SEO",
  //     "Grey Hat SEO",
  //     "Negative SEO",
  //     "On-Page SEO",
  //   ],
  // },
  // {
  //   icon: "Analytics",
  //   title: "Data Analysis",
  //   list: [
  //     "Diagnostic Analysis",
  //     "Predictive Analysis",
  //     "Prescriptive Analysis",
  //     "Risk Assessment",
  //     "Sales Forecasting",
  //   ],
  // },
  // {
  //   icon: "CorporateFare",
  //   title: "Brand Identity",
  //   list: [
  //     "Brand Architecture",
  //     "Brand Authenticity",
  //     "Brand Awareness",
  //     "Brand Management",
  //     "Brand Metrics",
  //   ],
  // },
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
    value: "99",
    text: "Happy Clients",
  },
  {
    icon: "Settings",
    value: "180",
    text: "Projects Completed",
  },
  {
    icon: "CalendarMonth",
    value: "21",
    text: "Years of Experience",
  },
];

const projects = [
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg",
    title: "Givest - Non-Profit PSD Template",
    link: "/",
  },
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-2.jpg",
    title: "Musion - Gardening Website Template",
    link: "/",
  },
  {
    image:
      "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-3.jpg",
    title: "SEOLLY - SEO Marketing and Digital Agency",
    link: "/",
  },
];

export default function Home() {
  return (
    <>
      <Profile profilePicture={ProfilePicture} />
      <Services services={services} />
      <Skills skills={skills} />
      <Statistics statistics={statistics} />
      <Projects projects={projects} />
    </>
  );
}
