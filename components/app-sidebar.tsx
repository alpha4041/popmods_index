"use client"

import { useState } from "react"
import Link from "next/link"
import { SmartphoneIcon as Android, Globe, Home, Laptop, Monitor, Layers, Smartphone, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function AppSidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  const categories = [
    { name: "All Apps", icon: Home },
    { name: "Android", icon: Android },
    { name: "Linux", icon: Laptop },
    { name: "Windows", icon: Monitor },
    { name: "Websites", icon: Globe },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2 py-3">
          <Smartphone className="h-6 w-6" />
          <span className="text-lg font-bold">App Index</span>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Browse</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton
                    isActive={activeCategory === category.name}
                    onClick={() => setActiveCategory(category.name)}
                    tooltip={category.name}
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Popular Tags</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Vaporwave">
                  <Layers className="h-4 w-4" />
                  <span>#Vaporwave</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Pixel Art">
                  <Layers className="h-4 w-4" />
                  <span>#Pixel Art</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Synthwave">
                  <Layers className="h-4 w-4" />
                  <span>#Synthwave</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={toggleTheme}>
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
          <p>© 2025 App Index</p>
          <Link href="#" className="hover:underline">
            Join our Telegram Channel
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

