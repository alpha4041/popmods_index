"use client"

import { useState } from "react"
import AppCard from "@/components/app-card"
import { useSidebar } from "@/components/ui/sidebar"
import { useMediaQuery } from "@/hooks/use-media-query"

// Sample app data
const APPS = [
  {
    id: "1",
    cloudid: "1",
    title: "CD-ROMantic",
    description: "Vaporwave music with slowed + reverb, sped up, lofi chill & nightcore effects",
    links: {
      download: "https://play.google.com/store/apps",
      screenshots: "https://t.me/appindex/1",
      features: "https://t.me/appindex/2",
    },
    developer: {
      name: "Retro Dev Studios",
      url: "https://play.google.com/store/apps/developer?id=retrodevstudios",
    },
    tags: ["Android", "Vaporwave", "Music", "Retro"],
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
  
]

export default function AppGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { state } = useSidebar()
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  // Filter apps by active tag if one is selected
  const filteredApps = activeTag ? APPS.filter((app) => app.tags.includes(activeTag)) : APPS

  return (
    <div className={`grid gap-4 sm:gap-6 ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"}`}>
      {filteredApps.map((app) => (
        <AppCard key={app.id} app={app} onTagClick={setActiveTag} />
      ))}
      {filteredApps.length === 0 && (
        <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <div>
            <p className="text-muted-foreground">No apps found matching your criteria</p>
            <button onClick={() => setActiveTag(null)} className="mt-2 text-sm text-primary hover:underline">
              Clear filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

