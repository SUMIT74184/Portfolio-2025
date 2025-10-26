export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: "Android" | "Backend" | "Web" | "AI"
  tags: string[]
  highlights: string[]
  image: string
  links: {
    github?: string
    demo?: string
    caseStudy?: string
  }
}

export const projects: Project[] = [
  {
    id: "spendmate",
    title: "SpendMate",
    description: "Personal finance tracker with microservice architecture and AI-assisted categorization",
    longDescription:
      "SpendMate is a comprehensive personal finance management application built with a modern microservice architecture. It provides real-time expense insights, AI-powered transaction categorization, and secure data management across distributed services.",
    category: "Android",
    image: "/mobile-finance-app-dashboard-with-expense-tracking.jpg",
    tags: ["React Native", "Spring Boot", "Kafka", "Redis", "Docker", "AWS Lightsail", "AI"],
    highlights: [
      "Kafka-based event-driven architecture for real-time expense processing",
      "Redis caching layer for optimized query performance",
      "Secure REST APIs with authentication and authorization",
      "Containerized deployment on AWS Lightsail",
      "AI-assisted expense categorization and insights",
    ],
    links: {
      github: "https://github.com/SUMIT74184/SpendMate",
      demo: "#",
      caseStudy: "#",
    },
  },
  {
    id: "ecomzy",
    title: "Ecomzy",
    description: "Student-focused marketplace with cart, checkout, and admin panel",
    longDescription:
      "Ecomzy is a full-featured e-commerce platform designed for students. It includes product listings, shopping cart functionality, secure checkout, user authentication, and a comprehensive admin dashboard for inventory management.",
    category: "Web",
    image: "/Ecommzy.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit"],
    highlights: [
      "RESTful API design with Express.js backend",
      "Redux Toolkit for predictable state management",
      "Responsive UI with React and Tailwind CSS",
      "MongoDB schemas optimized for read/write balance",
      "Secure user authentication and role-based access",
    ],
    links: {
      github: "https://github.com/SUMIT74184/e-commerce",
      demo: "#",
    },
  },
  {
    id: "study-notion",
    title: "Study Notion",
    description: "Learning platform MVP with course pages and content management",
    longDescription:
      "Study Notion is an educational platform MVP that enables course creation, user enrollment, and content management. It features modular API design, flexible authentication flows, and role-based access control.",
    category: "Web",
    image: "/edtecg.png",
    tags: ["MERN", "REST", "Auth", "MongoDB"],
    highlights: [
      "Modular API design for scalability",
      "Comprehensive authentication and authorization flows",
      "Role-based access control for instructors and students",
      "Deployment-ready architecture",
      "Content management system for course materials",
    ],
    links: {
      github: "https://github.com/SUMIT74184/Study-Notion",
      demo: "#",
    },
  },
]
