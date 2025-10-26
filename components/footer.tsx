import { Github, Mail, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Sumit Rai</h3>
            <p className="text-muted-foreground text-sm">
              Software Developer | Scalable Backends & AI Integrations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/sumit74184"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rais74184@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-rai-learner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Sumit Rai. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
