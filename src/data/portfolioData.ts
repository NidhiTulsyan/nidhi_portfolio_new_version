export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  profileImage: string;
  resume: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
    email: string;
    phone: string;
  };
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  images: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const portfolioData: PortfolioData = {
  name: "Nidhi Tulsyan",
  title: "Full Stack Developer",
  about: "I'm a passionate full stack developer with expertise in creating responsive and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I strive to build scalable solutions that solve real-world problems.",
  // profileImage: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // profileImage: "https://drive.google.com/file/d/12x1rOJb_0BS8X0YsCmLjE_cZM9_ejU8Y/view?usp=sharing",
  profileImage: "/pic2.png",
  resume: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/nidhi-tulsyan19/",
    github: "https://github.com/NidhiTulsyan",
    leetcode: "https://leetcode.com/u/NidhiTulsyan/",
    email: "tulsyannidhi19@gmail.com",
    phone: "8487036323"
  },
  projects: [
    
  {
    id: "project1",
    title: "Online Examination System (Ongoing)",
    description: "A comprehensive online examination system with camera-based proctoring, OTP validation, and JWT-based session management. It enables secure MCQ-based assessments for students and centralized exam creation for teachers.",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "REST API"],
    githubLink: "https://github.com/yourusername/online-examination-system",
    demoLink: "",
    images: ["https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  },
  {
    id: "project2",
    title: "Voice-Based Question Answering System",
    description: "An AI-powered system that answers questions using voice input, applying K-Means Clustering and Cosine Similarity for NLP-based responses. Features include real-time speech recognition, NLP processing, and a GUI built with Tkinter.",
    technologies: ["Python", "Machine Learning", "K-Means Clustering", "Cosine Similarity", "Tkinter", "RapidBuzz", "TF-IDF"],
    githubLink: "https://github.com/NidhiTulsyan/voice-based-question-answering",
    demoLink: "",
    images: ["https://images.pexels.com/photos/8438912/pexels-photo-8438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  },
  {
    id: "project3",
    title: "Movie Ordering Website",
    description: "A user-friendly storefront for browsing and ordering movies with an admin dashboard for managing listings and orders. Backend powered by MongoDB and Express.js for efficient data handling.",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js","REST-API"],
    githubLink: "https://github.com/NidhiTulsyan/movieBook",
    demoLink: "",
    images: ["https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  },
  {
    id: "project4",
    title: "Airbnb Landing Page Clone",
    description: "A responsive clone of the Airbnb landing page built with React.js and styled using Material-UI, closely mimicking the design and functionality of the original.",
    technologies: ["React.js", "Material-UI"],
    githubLink: "https://github.com/NidhiTulsyan/mui-airbnb-design",
    demoLink: "",
    images: ["https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  }


  ],
  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript" ,"React", "Tailwind CSS","Material-UI"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "RESTful APIs",]
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "Vercel", "Netlify"]
    }
  ],
  certifications: [
    {
      id: "cert1",
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-7a14d523-9ed7-4356-92d0-bec6d2ba8ce1.pdf"
    },
    {
      id: "cert2",
      title: "Introduction to Cloud Computing",
      issuer: "Simplilearn",
      date: "2024",
      link: "https://certificates.simplicdn.net/share/7040996_1722188817.pdf"
    },
    {
      id: "cert3",
      title: "Python Course for Beginners With Certification: Mastering the Essentials",
      issuer: "Scaler",
      date: "2025",
      link: "https://moonshot.scaler.com/s/sl/Ek5-HsPpXd?_gl=1*1ogueky*FPAU*NjE5NjUzOTI5LjE3NDMxNDY0ODM.*_ga*NTIxMDQ1My4xNzQzMTQ2NDgz*_ga_53S71ZZG1X*MTc0MzE3NDc0NS4yLjEuMTc0MzE3NzY2OS4wLjAuMTAxMzg5MzAyNw.."
    }
  ]
};

export default portfolioData;