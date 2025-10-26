import { Code2, Zap, Shield, Smartphone } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Scalable backend systems and high-performance APIs",
      deliverables: [
        "Backend systems (Java 8+, Spring Boot, Microservices)",
        "API design (REST, GraphQL)",
        "Database modeling (SQL/MongoDB)",
        "Event-driven architectures (Kafka)",
        "Caching solutions (Redis)",
        "Containerization (Docker)",
        "Cloud deployment (AWS Lightsail)",
      ],
    },
    {
      icon: Zap,
      title: "AI Integrations",
      description: "Practical AI features for production applications",
      deliverables: [
        "Embeddings and semantic search",
        "Text processing and NLP",
        "Feature automation",
        "Integration with AI providers",
        "Cost and latency optimization",
        "Prompt engineering",
        "Model fine-tuning consultation",
      ],
    },
    {
      icon: Shield,
      title: "API Management",
      description: "Robust, secure, and well-documented APIs",
      deliverables: [
        "Rate limiting and throttling",
        "Authentication & authorization",
        "Monitoring and logging",
        "API versioning",
        "Comprehensive documentation",
        "Developer onboarding",
        "Performance optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Apps",
      description: "Responsive, performant user experiences",
      deliverables: [
        "React Native mobile apps",
        "MERN web applications",
        "Performance-first UIs",
        "State management (Redux Toolkit, Zustand)",
        "Responsive design",
        "Accessibility compliance",
        "Cross-platform testing",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-secondary rounded-lg p-8 border border-border hover:border-muted-foreground transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <Icon size={24} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mt-6">
                  {service.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex gap-3 text-foreground text-sm">
                      <span className="text-muted-foreground flex-shrink-0">✓</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors text-sm font-medium"
                >
                  Request a Quote
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
