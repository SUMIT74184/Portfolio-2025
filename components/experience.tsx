import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Intern",
      company: "Deltecs Pvt Ltd",
      period: "May 2024 – Dec 2024",
      location: "India",
      highlights: [
        "Contributed to backend/API features using Java and Spring Boot",
        "Collaborated on microservice architecture and design patterns",
        "Wrote optimized SQL and MongoDB queries for data operations",
        "Containerized application components using Docker",
        "Gained exposure to CI/CD pipelines and deployment workflows",
      ],
    },
    {
      title: "Open Source & Freelance",
      company: "Self-Employed",
      period: "Jan 2025 – Present",
      location: "Remote",
      highlights: [
        "Consulting on backend scalability and API design",
        "Delivering React Native mobile applications",
        "Integrating AI services into client projects",
        "Setting up Dockerized microservices architectures",
        "Managing cloud deployments on AWS Lightsail",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-lg p-8 border border-border hover:border-muted-foreground transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-foreground">
                    <span className="text-muted-foreground flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
