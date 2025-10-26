"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { projects, type Project } from "@/lib/projects-data"

type Category = "All" | "Mobile" | "Backend" | "Web" | "AI"

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const categories: Category[] = ["All", "Mobile", "Backend", "Web", "AI"]

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true
    return project.category === selectedCategory
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance animate-slideUp">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border border-primary shadow-lg"
                  : "bg-secondary text-foreground border border-border hover:border-muted-foreground hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} style={{ animationDelay: `${idx * 100}ms` }} className="animate-slideUp">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsExpanded(true)}
        className="bg-primary rounded-2xl overflow-hidden border border-border hover:border-muted-foreground transition-all duration-300 cursor-pointer group hover:shadow-lg h-96 flex flex-col"
      >
        <div className="relative h-60 overflow-hidden bg-secondary">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-bold text-lg text-center px-4">{project.title}</h3>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          {/* Category Badge */}
          <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full w-fit mb-2">
            {project.category}
          </span>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded border border-border"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded border border-border">
                +{project.tags.length - 2}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-3 border-t border-border">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(true)
              }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              Details
            </button>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
              >
                <Github size={14} />
                Code
              </a>
            )}
            {project.links.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="bg-primary rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full inline-block mb-3">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-foreground">{project.title}</h2>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Long Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground">
                      <span className="text-muted-foreground flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-6 border-t border-border">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-accent transition-all duration-300 font-medium hover:shadow-lg"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {project.links.demo && project.links.demo !== "#" && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-accent transition-all duration-300 font-medium hover:shadow-lg"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
