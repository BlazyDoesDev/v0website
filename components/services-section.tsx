"use client"

import { Server, Calendar, Users, FileText } from "lucide-react"

const services = [
  {
    name: "Discord Setup",
    description: "Complete server setup with roles, channels, bots, and moderation systems",
    price: "Starting at $150",
    icon: Server,
  },
  {
    name: "Event Management",
    description: "Plan and execute engaging community events, tournaments, and giveaways",
    price: "Starting at $75/event",
    icon: Calendar,
  },
  {
    name: "Ongoing Management",
    description: "Full-time community management with 24/7 moderation coverage",
    price: "Starting at $500/mo",
    icon: Users,
  },
  {
    name: "Strategy Consulting",
    description: "Community growth strategies, engagement optimization, and analytics",
    price: "Starting at $100/hr",
    icon: FileText,
  },
]

export function ServicesSection() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
        Services
      </h2>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="p-4 bg-secondary/50 rounded-xl border border-border/50 hover:border-emerald-500/50 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                <p className="text-sm font-semibold text-cyan-400 mt-2">{service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
