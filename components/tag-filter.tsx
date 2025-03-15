"use client"

import { useState } from "react"
import { ChevronDown, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Sample tags
const POPULAR_TAGS = [
  "Android",
  "Music",
  "Retro",
  "Vaporwave",
  "Utilities",
  "Productivity",
  "Photography",
  "Fitness",
  "Pixel Art",
]

export default function TagFilter() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearTags = () => {
    setSelectedTags([])
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Popular Tags</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {POPULAR_TAGS.map((tag) => (
            <DropdownMenuCheckboxItem
              key={tag}
              checked={selectedTags.includes(tag)}
              onCheckedChange={() => toggleTag(tag)}
            >
              #{tag}
            </DropdownMenuCheckboxItem>
          ))}
          {selectedTags.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <Button variant="ghost" size="sm" className="w-full justify-center text-xs" onClick={clearTags}>
                Clear All
              </Button>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-wrap gap-1">
        {selectedTags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            #{tag}
            <Button variant="ghost" size="icon" className="ml-1 h-4 w-4 p-0" onClick={() => toggleTag(tag)}>
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {tag}</span>
            </Button>
          </Badge>
        ))}
      </div>
    </div>
  )
}

