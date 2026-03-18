"use client"

import { CheckCircle, Circle } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Banner */}
      <div className="h-32 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 rounded-t-xl" />
      
      {/* Avatar and Info */}
      <div className="px-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-1">
              <img 
                src="https://avatar.hyra.io/colour/6511685" 
                alt="Blazy's Roblox Avatar"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            {/* Online Status */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-4 border-card flex items-center justify-center">
              <Circle className="w-2 h-2 fill-current text-orange-200" />
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground">
                Blazy
              </h1>
              <CheckCircle className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-muted-foreground text-sm mt-1">@blazyrawr</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <a 
              href="mailto:blazyrawr@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Blazy,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20community%20management."
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-background font-semibold rounded-lg transition-colors text-sm"
            >
              Hire Me
            </a>
            <a 
              href="mailto:blazyrawr@gmail.com"
              className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground font-semibold rounded-lg transition-colors border border-border text-sm"
            >
              Message
            </a>
          </div>
        </div>
        
        {/* Bio */}
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl">
          Community Management specialist with experience in Roblox groups and Discord servers. 
          Chief Internal Affairs Officer at Naansense and Corporate Intern at Freshly. 
          Passionate about building and maintaining thriving gaming communities.
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["Internal Affairs", "Community Management", "Discord Expert", "Roblox Groups"].map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-secondary/50 text-muted-foreground text-xs rounded-full border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
