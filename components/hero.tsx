import type React from "react"
import {
  ArrowRight,
  Coffee,
  Zap,
  MessageSquare,
  Database,
  Smartphone,
  Code2,
  Container,
  Layers,
  Sparkles,
} from "lucide-react"
import { PROFILE_IMAGE_URL } from "@/lib/emailjs-config"

const techStackIcons: Record<string, React.ReactNode> = {
  "Java 8+": <Coffee size={16} />,
  "Spring Boot": <Zap size={16} />,
  Kafka: <MessageSquare size={16} />,
  Redis: <Database size={16} />,
  "React Native": <Smartphone size={16} />,
  MERN: <Code2 size={16} />,
  Docker: <Container size={16} />,
  Microservices: <Layers size={16} />,
  AI: <Sparkles size={16} />,
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-secondary border-2 border-border flex items-center justify-center hover:border-muted-foreground transition-all duration-300 hover:shadow-lg overflow-hidden">
            <img src={PROFILE_IMAGE_URL || "/SumitPhotoprofile.png"} alt="Sumit Rai" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-3xl font-bold text-foreground text-balance leading-tight">
            Software Developer — Scalable Backends, Mobile & Web, AI Integrations
          </h1>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm Sumit Rai, a software developer focused on building scalable backend systems and high-quality mobile/web
            apps. I work with Java 8+, Spring Boot, Kafka, Redis, and modern JavaScript stacks, and integrate AI to
            deliver practical, production-ready features. I care about clean architecture, system reliability, and
            developer experience.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all duration-300 font-medium flex items-center justify-center gap-2 group hover:shadow-lg"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-border text-foreground rounded-lg hover:bg-primary hover:border-primary transition-all duration-300 font-medium hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-8 flex flex-wrap gap-2 justify-center">
          {["Java 8+", "Spring Boot", "Kafka", "Redis", "React Native", "MERN", "Docker", "Microservices", "AI"].map(
            (tech, idx) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full border border-border hover:border-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {techStackIcons[tech]}
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
