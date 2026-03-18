"use client"

import { Shield, Award, Star, Flame, Crown, Sparkles } from "lucide-react"

const badges = [
  {
    name: "Master Moderator",
    description: "Managed 10+ communities with 10K+ members each",
    icon: Shield,
    rarity: "Legendary",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/50",
  },
  {
    name: "Event Champion",
    description: "Successfully hosted 100+ community events",
    icon: Award,
    rarity: "Epic",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/50",
  },
  {
    name: "Community Star",
    description: "Achieved 4.9+ rating from 50+ clients",
    icon: Star,
    rarity: "Epic",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/50",
  },
  {
    name: "Engagement Expert",
    description: "Maintained 90%+ member retention rate",
    icon: Flame,
    rarity: "Rare",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/50",
  },
  {
    name: "Roblox Veteran",
    description: "5+ years managing Roblox communities",
    icon: Crown,
    rarity: "Legendary",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/50",
  },
  {
    name: "Growth Hacker",
    description: "Grew a community from 0 to 100K members",
    icon: Sparkles,
    rarity: "Epic",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/50",
  },
]

const rarityColors: Record<string, string> = {
  Legendary: "text-amber-400",
  Epic: "text-purple-400",
  Rare: "text-emerald-400",
}

export function BadgesSection() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full" />
        Achievements
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className={`${badge.bgColor} border ${badge.borderColor} rounded-xl p-4 hover:scale-105 transition-transform cursor-pointer group`}
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${badge.color} flex items-center justify-center mb-3`}>
              <badge.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-semibold text-foreground">{badge.name}</p>
            <p className={`text-xs ${rarityColors[badge.rarity]} font-medium mt-1`}>{badge.rarity}</p>
            
            {/* Tooltip on hover */}
            <div className="opacity-0 group-hover:opacity-100 absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-popover border border-border rounded-lg p-2 text-xs text-muted-foreground max-w-[200px] pointer-events-none transition-opacity z-10 hidden sm:block">
              {badge.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
