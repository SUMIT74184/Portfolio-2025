export function Metrics() {
  const metrics = [
    { label: "Years Active", value: "2024–Present" },
    { label: "Projects", value: "80+" },
    { label: "Tech Stack", value: "15+" },
    { label: "Open Source", value: "Since Jan 2025" },
  ]

  return (
    <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-secondary rounded-lg p-6 text-center border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
