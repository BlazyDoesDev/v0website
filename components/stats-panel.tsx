"use client"

import { Users, MessageSquare, Clock } from "lucide-react"

const stats = [
  {
    label: "Communities",
    value: "2",
    icon: Users,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Total Members",
    value: "394K+",
    icon: MessageSquare,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Avg Response",
    value: "Fast",
    icon: Clock,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
]

export function StatsPanel() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-xl p-4 hover:border-orange-500/50 transition-colors group"
        >
          <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mb-3`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <p className="text-xl font-bold font-[family-name:var(--font-display)] text-foreground group-hover:text-orange-400 transition-colors">
            {stat.value}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
