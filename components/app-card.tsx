"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, ImageIcon, Info } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AppCardProps {
  app: {
    id: string
    title: string
    description: string
    links: {
      download: string
      screenshots: string
      features: string
    }
    developer: {
      name: string
      url: string
    }
    tags: string[]
    thumbnail: string
  }
  onTagClick: (tag: string) => void
}

export default function AppCard({ app, onTagClick }: AppCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn("group overflow-hidden transition-all duration-300 hover:shadow-lg", isHovered && "scale-[1.02]")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="flex items-start gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-muted sm:h-16 sm:w-16">
            <Image src={app.thumbnail || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold truncate sm:text-xl">{app.title}</h2>
            <Link href={app.developer.url} className="text-xs text-muted-foreground hover:underline sm:text-sm">
              {app.developer.name}
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <p className="mb-3 text-xs text-muted-foreground line-clamp-2 sm:text-sm sm:mb-4">{app.description}</p>

        <div className="mb-3 grid grid-cols-1 gap-2 sm:mb-4">
          <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs sm:text-sm">
            <Link href={app.links.download}>
              <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Download
            </Link>
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs sm:text-sm">
              <Link href={app.links.screenshots}>
                <ImageIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Screenshots
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs sm:text-sm">
              <Link href={app.links.features}>
                <Info className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Features
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1 p-3 pt-0 sm:gap-2 sm:p-4 sm:pt-0">
        {app.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="cursor-pointer text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => onTagClick(tag)}
          >
            #{tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

