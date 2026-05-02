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
    role: "Founders Assistant",
    company: "Naansense",
    period: "05/2026-Present",
    description: "Assisting founders with community management, operations, and strategic growth.",
    skills: ["Operations", "Leadership", "Strategic Planning", "Community Management"],
  },
  {
    role: "Ownership Assistant",
    company: "Naansense",
    period: "03/2026-05/2026",
    description: "Leading internal affairs for a growing Roblox community with 124+ members",
    skills: ["Internal Affairs", "Leadership", "Moderation", "Community Growth"],
  },
  {
    role: "Corporate Intern",
    company: "Freshly",
    period: "02/2026-Present",
    description: "Contributing to community management in one of the larger Roblox groups with 394K members, Working accross all departments, with a small team of corporates",
    skills: ["Deputy Head Of Interns", "Team Collaboration", "Community Support", "Intern Trainer", "Public Relations", "Internal Affairs", "Support"],
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
        {experiences.map((exp, index) => {
          const isSameCompanyAsPrevious = index > 0 && experiences[index - 1].company === exp.company;
          
          return (
            <div key={`${exp.company}-${exp.role}`} className="relative">
              {/* Timeline line */}
              {experiences.length > 1 && (
                <div 
                  className={`absolute left-5 w-px bg-border z-0 ${
                    index === 0 ? "top-10 bottom-[-1.5rem]" : 
                    index === experiences.length - 1 ? "top-0 h-5" : 
                    "top-0 bottom-[-1.5rem]"
                  }`} 
                />
              )}

              <div className="flex gap-4 relative z-10">
                {/* Timeline Node */}
                <div className="w-10 flex flex-col items-center flex-shrink-0">
                  {!isSameCompanyAsPrevious ? (
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center relative z-10">
                      <Briefcase className="w-5 h-5 text-orange-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center relative z-10">
                      <div className="w-2 h-2 rounded-full bg-border ring-4 ring-card" />
                    </div>
                  )}
              </div>

                <div className="flex-1 min-w-0 pt-1 pb-2">
                  {!isSameCompanyAsPrevious && (
                    <h3 className="text-base font-bold text-orange-400 mb-2">{exp.company}</h3>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  
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
          )
        })}
      </div>
    </div>
  )
}
