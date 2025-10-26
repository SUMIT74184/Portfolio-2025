"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-slideDown">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          Sumit Rai
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all duration-300 text-sm font-medium hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-primary animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm text-primary-foreground hover:text-muted-foreground transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-all duration-300 text-sm font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
