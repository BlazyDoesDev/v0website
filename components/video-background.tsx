"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string
          playerVars: Record<string, number | string>
          events: {
            onReady: (event: { target: YTPlayer }) => void
          }
        }
      ) => YTPlayer
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  setVolume: (volume: number) => void
  getVolume: () => number
  mute: () => void
  unMute: () => void
  isMuted: () => boolean
}

export function VideoBackground() {
  const [volume, setVolume] = useState(30)
  const [isMuted, setIsMuted] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const playerRef = useRef<YTPlayer | null>(null)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "16iKzV6e9Pk",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "16iKzV6e9Pk",
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(30)
            setIsReady(true)
          },
        },
      })
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {}
    }
  }, [])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (playerRef.current && isReady) {
      playerRef.current.setVolume(newVolume)
      if (newVolume > 0 && isMuted) {
        playerRef.current.unMute()
        setIsMuted(false)
      }
    }
  }

  const toggleMute = () => {
    if (playerRef.current && isReady) {
      if (isMuted) {
        playerRef.current.unMute()
        playerRef.current.setVolume(volume)
      } else {
        playerRef.current.mute()
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Video Container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 scale-150">
          <div id="youtube-player" className="w-full h-full" />
        </div>
        {/* Blur and dark overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-background/80" />
      </div>

      {/* Volume Control */}
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
        <span className="text-xs text-muted-foreground w-8 tabular-nums">
          {isMuted ? 0 : volume}%
        </span>
      </div>
    </>
  )
}
