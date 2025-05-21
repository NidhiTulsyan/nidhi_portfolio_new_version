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
  profileImage: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  resume: "/resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    leetcode: "https://leetcode.com/johndoe",
    email: "tulsyannidhi19@example.com",
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
    githubLink: "https://github.com/yourusername/voice-qa-system",
    demoLink: "",
    images: ["https://images.pexels.com/photos/8438912/pexels-photo-8438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  },
  {
    id: "project3",
    title: "Movie Ordering Website",
    description: "A user-friendly storefront for browsing and ordering movies with an admin dashboard for managing listings and orders. Backend powered by MongoDB and Express.js for efficient data handling.",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js"],
    githubLink: "https://github.com/yourusername/movie-ordering-website",
    demoLink: "",
    images: ["https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  },
  {
    id: "project4",
    title: "Airbnb Landing Page Clone",
    description: "A responsive clone of the Airbnb landing page built with React.js and styled using Material-UI, closely mimicking the design and functionality of the original.",
    technologies: ["React.js", "Material-UI"],
    githubLink: "https://github.com/yourusername/airbnb-landing-clone",
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
      title: "AWS Certified Developer - Associate",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.credly.com/badges/example"
    },
    {
      id: "cert2",
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      link: "https://www.coursera.org/account/accomplishments/example"
    },
    {
      id: "cert3",
      title: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2021",
      link: "https://www.credential.net/example"
    }
  ]
};

export default portfolioData;