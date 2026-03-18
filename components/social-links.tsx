"use client"

import { MessageCircle, Gamepad2 } from "lucide-react"

const socials = [
  {
    name: "Discord",
    handle: "blazyrawr",
    icon: MessageCircle,
    color: "hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-400",
    url: "https://discord.com/users/blazyrawr",
  },
  {
    name: "Roblox",
    handle: "blazeburnage",
    icon: Gamepad2,
    color: "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400",
    url: "https://www.roblox.com/users/profile?username=blazeburnage",
  },
]

export function SocialLinks() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-orange-500 rounded-full" />
        Connect
      </h2>
      
      <div className="space-y-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-3 rounded-xl border border-border bg-secondary/30 transition-all ${social.color}`}
          >
            <social.icon className="w-5 h-5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{social.name}</p>
              <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
