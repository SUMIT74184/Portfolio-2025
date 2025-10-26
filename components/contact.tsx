"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Github, Send, Linkedin } from "lucide-react"
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Backend",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Access env vars directly in the API call - Turbopack handles these differently
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

    console.log('Env vars check:', {
      SERVICE_ID: SERVICE_ID?.substring(0, 8) + '...',
      TEMPLATE_ID: TEMPLATE_ID?.substring(0, 8) + '...',
      PUBLIC_KEY: PUBLIC_KEY?.substring(0, 8) + '...',
    })

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Email service not configured', {
        hasService: !!SERVICE_ID,
        hasTemplate: !!TEMPLATE_ID,
        hasKey: !!PUBLIC_KEY
      })
      setSubmitStatus("error")
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    try {
      console.log('=== EMAIL SEND START ===')
      console.log('EmailJS loaded?', typeof emailjs, emailjs)
      console.log('Service ID:', SERVICE_ID)
      console.log('Template ID:', TEMPLATE_ID)
      console.log('Public Key:', PUBLIC_KEY?.substring(0, 10) + '...')

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          email: "rais74184@gmail.com", // To Email
          to_name: "Sumit", // Recipient name
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        },
        PUBLIC_KEY
      )

      console.log('=== EMAIL SUCCESS ===', result)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        projectType: "Backend",
        budget: "",
        timeline: "",
        message: "",
      })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error: any) {
      console.log('=== EMAIL ERROR ===')
      console.log('Raw error:', error)
      console.log('Error type:', typeof error)
      console.log('Error string:', String(error))
      console.log('Error JSON:', JSON.stringify(error, null, 2))
      if (error) {
        console.log('Error properties:', Object.getOwnPropertyNames(error))
      }
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:rais74184@gmail.com"
                  className="flex items-center gap-4 p-4 bg-primary rounded-lg border border-border hover:border-muted-foreground transition-colors group"
                >
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent transition-colors">
                    <Mail size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">rais74184@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/sumit74184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-primary rounded-lg border border-border hover:border-muted-foreground transition-colors group"
                >
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent transition-colors">
                    <Github size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-medium">sumit74184</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Personal Motto */}
            <div className="bg-primary rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2">Personal Motto</p>
              <p className="text-lg font-semibold text-foreground italic">"sumit rai learner"</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-foreground focus:outline-none focus:border-muted-foreground transition-colors"
              >
                <option>Backend</option>
                <option>Mobile</option>
                <option>Web</option>
                <option>AI Integration</option>
                <option>API Management</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
                  placeholder="e.g., $5k - $10k"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
                  placeholder="e.g., 2-4 weeks"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-center text-foreground bg-primary p-3 rounded-lg border border-border">
                Message sent! I'll get back to you soon.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-center text-destructive bg-primary p-3 rounded-lg border border-border">
                Error sending message. Please check your configuration or try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}