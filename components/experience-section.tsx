"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Operations Manager",
    company: "Bloxly",
    period: "03/2026-Present",
    description: "Assists with business operations and marketing",
    skills: ["Stripe", "Customer Support", "Marketing", "Social Media"],
  },
  {
    role: "Chief Internal Affairs Officer",
    company: "Naansense",
    period: "03/2026-Present",
    description: "Leading internal affairs for a growing Roblox community with 124+ members",
    skills: ["Internal Affairs", "Leadership", "Moderation", "Community Growth"],
  },
  {
    role: "Corporate Intern",
    company: "Freshly",
    period: "02/2026-Present",
    description: "Contributing to community management in one of the larger Roblox groups with 394K members, Working accross all departments, with a small team of corporates",
    skills: ["Corporate Operations", "Team Collaboration", "Community Support", "Intern Trainer", "Public Relations", "Internal Affairs", "Support"],
  },
]

export function ExperienceSection() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-amber-500 rounded-full" />
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.role} className="relative">
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
            )}

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-orange-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <p className="text-sm text-orange-400 mt-0.5">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
