"use client"

import {
  Coffee,
  Leaf,
  Zap,
  Database,
  Server,
  Code,
  Layers,
  Box,
  Container,
  Cloud,
  Store,
  Package,
  Smartphone,
  Brain,
  Sparkles,
  MessageSquare,
  Image,
  Wand2,
} from "lucide-react"

export function TechMarquee() {
  const techs = [
    { name: "Java", icon: Coffee },
    { name: "Spring Boot", icon: Leaf },
    { name: "Kafka", icon: Zap },
    { name: "Redis", icon: Database },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Code },
    { name: "MongoDB", icon: Database },
    { name: "React", icon: Layers },
    { name: "React Native", icon: Smartphone },
    { name: "Redux Toolkit", icon: Box },
    { name: "Docker", icon: Container },
    { name: "SQL", icon: Database },
    { name: "AWS Lightsail", icon: Cloud },
    { name: "Zustand", icon: Store },
    { name: "OpenAI API", icon: Brain },
    { name: "Claude AI", icon: Sparkles },
    { name: "LangChain", icon: MessageSquare },
    { name: "Stable Diffusion", icon: Image },
    { name: "Prompt Engineering", icon: Wand2 },
  ]

  return (
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8 border-y border-border overflow-hidden">
      <div className="max-w-full mx-auto">
        <p className="text-sm text-muted-foreground mb-6 text-center">Tech Stack</p>
        
        <div className="relative">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-6 animate-scroll">
            {/* First set of items */}
            {techs.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div
                  key={`${tech.name}-1-${index}`}
                  className="flex-shrink-0 px-4 py-2 bg-secondary rounded-full border border-border text-foreground text-sm font-medium whitespace-nowrap flex items-center gap-2 hover:bg-accent transition-colors"
                >
                  <Icon size={16} className="text-muted-foreground" />
                  {tech.name}
                </div>
              )
            })}
            
            {/* Duplicate set for seamless loop */}
            {techs.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div
                  key={`${tech.name}-2-${index}`}
                  className="flex-shrink-0 px-4 py-2 bg-secondary rounded-full border border-border text-foreground text-sm font-medium whitespace-nowrap flex items-center gap-2 hover:bg-accent transition-colors"
                >
                  <Icon size={16} className="text-muted-foreground" />
                  {tech.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}