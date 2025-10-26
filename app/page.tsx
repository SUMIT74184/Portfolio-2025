import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { TechMarquee } from "@/components/tech-marquee"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Metrics />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
