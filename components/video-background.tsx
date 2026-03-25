"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [volume, setVolume] = useState(30)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.volume = volume / 100
    video.muted = isMuted

    const playPromise = video.play()
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay can be blocked by browser policy; keep muted fallback.
      })
    }
  }, [volume, isMuted])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseInt(e.target.value, 10)
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
    if (newVolume === 0) {
      setIsMuted(true)
    }
  }

  const toggleMute = () => {
    setIsMuted((current) => !current)
  }

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-150"
          src="/videos/background.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        >
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute inset-0 backdrop-blur-sm bg-background/80" />
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border rounded-lg px-3 py-2">
        <button
          onClick={toggleMute}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-orange-500"
          aria-label="Volume"
        />
        <span className="text-xs text-muted-foreground w-8 tabular-nums">{isMuted ? 0 : volume}%</span>
      </div>
    </>
  )
}
