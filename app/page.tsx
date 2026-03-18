import { ProfileHeader } from "@/components/profile-header"
import { StatsPanel } from "@/components/stats-panel"
import { SkillsSection } from "@/components/skills-section"
import { BadgesSection } from "@/components/badges-section"
import { ExperienceSection } from "@/components/experience-section"
import { SocialLinks } from "@/components/social-links"
import { VideoBackground } from "@/components/video-background"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <VideoBackground />
      
      <main className="relative max-w-5xl mx-auto px-4 py-8">
        {/* Profile Card */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
          <ProfileHeader />
        </div>
        
        {/* Stats */}
        <div className="mb-6">
          <StatsPanel />
        </div>
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <SkillsSection />
            <BadgesSection />
            <ExperienceSection />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <SocialLinks />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-muted-foreground">
          <p>Available for freelance work and long-term contracts</p>
          <p className="mt-1 font-mono">Last online: Just now</p>
        </footer>
      </main>
    </div>
  )
}
