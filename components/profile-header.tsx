"use client"

import { CheckCircle, Circle } from "lucide-react"

const bannerParticles = [
  { size: 8, left: "8%", top: "22%", duration: "7s", delay: "0s" },
  { size: 10, left: "18%", top: "58%", duration: "9s", delay: "-1.5s" },
  { size: 6, left: "28%", top: "30%", duration: "8s", delay: "-3s" },
  { size: 12, left: "41%", top: "18%", duration: "11s", delay: "-2s" },
  { size: 7, left: "54%", top: "62%", duration: "10s", delay: "-5s" },
  { size: 9, left: "63%", top: "34%", duration: "8.5s", delay: "-1s" },
  { size: 11, left: "74%", top: "20%", duration: "12s", delay: "-4s" },
  { size: 6, left: "82%", top: "54%", duration: "9.5s", delay: "-6s" },
  { size: 8, left: "91%", top: "28%", duration: "7.5s", delay: "-2.5s" },
]

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Banner */}
      <div className="profile-banner relative h-32 overflow-hidden rounded-t-xl bg-gradient-to-r from-orange-950 via-orange-700/30 to-red-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(251,146,60,0.16),transparent_45%,rgba(249,115,22,0.18)_75%,transparent)]" />

        {bannerParticles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="profile-banner-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              opacity: 0.24 + index * 0.04,
            }}
          />
        ))}

        <svg
          className="profile-banner-wave profile-banner-wave-back"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(251, 146, 60, 0.28)"
            d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,133.3C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        <svg
          className="profile-banner-wave profile-banner-wave-front"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(249, 115, 22, 0.48)"
            d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

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
