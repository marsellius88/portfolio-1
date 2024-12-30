import Profile from "../components/Home/Profile";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";
import ProfilePicture from "../assets/woman-2.png";
import Statistics from "../components/Home/Statistics";
import Projects from "../components/Home/Projects";
import Testimonials from "../components/Home/Testimonials";
import Companies from "../components/Home/Companies";
import Company1 from "../assets/company-1.jpg";
import Company2 from "../assets/company-2.jpg";
import Company3 from "../assets/company-3.png";
import Company4 from "../assets/company-4.jpg";

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

export default function Home() {
  return (
    <>
      <Profile profilePicture={ProfilePicture} />
      <Services services={services} />
      <Skills skills={skills} />
      <Statistics statistics={statistics} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Companies companies={companies} />
    </>
  );
}
