"use client"

const skills = [
  { name: "Discord Moderation", level: 98, color: "from-orange-500 to-orange-400" },
  { name: "Event Planning", level: 95, color: "from-red-500 to-red-400" },
  { name: "Conflict Resolution", level: 92, color: "from-orange-500 to-red-500" },
  { name: "Content Strategy", level: 88, color: "from-amber-500 to-amber-400" },
  { name: "Team Leadership", level: 94, color: "from-orange-500 to-orange-400" },
  { name: "Analytics & Reporting", level: 85, color: "from-red-500 to-red-400" },
]

export function SkillsSection() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-orange-500 rounded-full" />
        Skills & Expertise
      </h2>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-foreground">{skill.name}</span>
              <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
