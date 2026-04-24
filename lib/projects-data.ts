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
    title: "Inventendo",
    description:
      "Supply Chain & Logistics Intelligence System with analytics, AI-based anomaly detection, and SaaS subscription workflows.",
    longDescription:
      "Inventendo is a supply chain and logistics intelligence platform designed for operations teams to monitor KPIs, detect anomalies, and manage SaaS-style subscriptions. It reuses a shared microservices backbone for scalability while delivering AI-powered system insights, real-time analytics, and integrated payment workflows.",
    category: "Backend",
    image: "/placeholder-logo.svg",
    tags: [
      "Next.js",
      "Spring Boot",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Redis",
      "AI Monitoring",
      "Payment Gateway",
      "Microservices",
      
    ],
    highlights: [
      "Designed analytics dashboards for supply chain teams to track KPIs and operational health",
      "Introduced AI-based anomaly detection and system insights in the initial release",
      "Enabled SaaS-style subscription billing with integrated payment workflows",
      "Built on a reusable microservices backbone for scalability and extensibility",
      "Implemented event-driven logistics processing with Kafka and Redis caching",
    ],
    links: {
      github: "https://github.com/SUMIT74184/Inventendo",
      demo: "https://cloudspan-inventory.lovable.app/",
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
    title: "Wolfdire",
    description:
      "AI Publishing & Monetization Platform enabling creators to publish, monetize, and auto-generate content summaries.",
    longDescription:
      "Wolfdire is a flagship AI publishing platform built for creators who need scalable content workflows, monetization, and automated AI summaries. It uses microservices to solve performance bottlenecks and incorporates async event processing, caching, and container orchestration for cloud-native delivery.",
    category: "AI",
    image: "/placeholder-logo.svg",
    tags: [
      "Next.js",
      "Spring Boot",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Redis",
      "Microservices",
      "Payment Gateway",
      "GENAI",
      
    ],
    highlights: [
      "Built a scalable Medium-like platform for publishing, payments, and AI summaries",
      "Resolved scalability bottlenecks with Kafka-based async processing for payments, analytics, and notifications",
      "Used Redis for caching and Kubernetes for horizontal scaling",
      "Implemented subscription-based monetization and cloud-native containerized services",
      "Integrated GenAI workflows and RAG-enabled content intelligence",
    ],
    links: {
      github: "https://github.com/SUMIT74184/WolfDir/tree/mc1",
      demo: "https://v0-wolf-dire.vercel.app/",
    },
  },
]
