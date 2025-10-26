import { CheckCircle2 } from "lucide-react"

export function About() {
  const strengths = [
    "Event-driven design with Kafka",
    "Caching with Redis",
    "Microservices with Spring Boot/Docker",
    "Mobile apps with React Native",
    "MERN web applications",
    "API design & management",
    "AI feature integration",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Narrative */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about building systems that scale. My philosophy centers on clean architecture, thorough
              testing, and monitoring—because production reliability matters. I believe in writing code that's not just
              functional, but maintainable and a joy to work with.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's designing event-driven microservices, optimizing database queries, or crafting responsive
              mobile interfaces, I approach each challenge with the same rigor: understand the problem deeply, design
              thoughtfully, and deliver with confidence.
            </p>
          </div>

          {/* Education & Current Focus */}
          <div className="space-y-8">
            <div className="bg-primary rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground mb-1">Master of Computer Applications</p>
              <p className="text-sm text-muted-foreground">CGPA: 8.45</p>
              <p className="text-xs text-muted-foreground mt-2 italic">(Institution and year to be added)</p>
            </div>

            <div className="bg-primary rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Current Focus</h3>
              <p className="text-muted-foreground">Open-source contributions and freelance work since January 2025</p>
            </div>
          </div>
        </div>

        {/* Key Strengths */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Strengths</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((strength) => (
              <div key={strength} className="flex items-start gap-3 p-4 bg-primary rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-muted-foreground flex-shrink-0 mt-1" />
                <span className="text-foreground">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
