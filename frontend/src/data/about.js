import ProfilePicture from "../assets/woman-2.png";

const about = {
  name: "Jane Smith",
  specialization: "UI/UX designer specializing in shopify & webflow.",
  profile:
    "Lorem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled.",
  profileVideoId: "PcV2g-kW-xo",
  profilePicture: ProfilePicture,
  resumeDownloadLink: "/",
  education: [
    {
      period: "2015 - 2019",
      degree: "Bachelor of Science in Computer Science",
      university: "University of California, Berkeley",
      description:
        "Focused on software development, algorithms, and data structures. Graduated with honors and led a project on machine learning applications in healthcare.",
    },
    {
      period: "2019 - 2021",
      degree: "Master of Science in Human-Computer Interaction",
      university: "Carnegie Mellon University",
      description:
        "Specialized in user experience design and usability testing. Conducted research on improving accessibility in web applications for individuals with disabilities.",
    },
    {
      period: "2022 - Present",
      degree: "Ph.D. in Artificial Intelligence",
      university: "Massachusetts Institute of Technology (MIT)",
      description:
        "Conducting research in deep learning and natural language processing. Published multiple papers in top-tier AI conferences and journals.",
    },
  ],
  experience: [
    {
      period: "2020 - 2022",
      position: "Frontend Developer",
      company: "TechNova Solutions",
      description:
        "Developed and maintained responsive web applications using React and Material-UI. Collaborated with designers and backend developers to create seamless user experiences. Improved website performance by 30% through optimization techniques.",
    },
    {
      period: "2018 - 2020",
      position: "UI/UX Designer",
      company: "Creative Minds Studio",
      description:
        "Designed intuitive user interfaces for mobile and web applications. Conducted user research and usability testing to refine designs. Successfully led the redesign of a major e-commerce platform, resulting in a 25% increase in user engagement.",
    },
    {
      period: "2022 - Present",
      position: "Product Manager",
      company: "Innovatech Inc.",
      description:
        "Overseeing the development of SaaS products for small businesses. Managing cross-functional teams, setting product roadmaps, and prioritizing features based on user feedback. Achieved a 15% increase in customer retention through strategic feature rollouts.",
    },
  ],
  contact: {
    phone: "6287615264589",
    email: "janesmith@example.com",
    website: "www.example.com",
    address: "Yogyakarta",
  },
  social: {
    instagram: "www.instagram.com",
    facebook: "www.facebook.com",
    linkedin: "www.linkedin.com",
  },
};

export default about;
