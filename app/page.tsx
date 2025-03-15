import { Suspense } from "react"
import AppGrid from "@/components/app-grid"
import SearchBar from "@/components/search-bar"
import TagFilter from "@/components/tag-filter"
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"

export default function HomePage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="container mx-auto max-w-7xl">
            <header className="mb-6 md:mb-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">App Index</h1>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Discover useful apps and tech content from Telegram
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <SearchBar />
              </div>
              <div className="mt-3 flex items-center justify-between md:mt-4">
                <TagFilter />
              </div>
            </header>
            <Suspense
              fallback={
                <div className="flex h-40 items-center justify-center">
                  <div className="text-center">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto"></div>
                    <p className="mt-2 text-sm text-muted-foreground">Loading apps...</p>
                  </div>
                </div>
              }
            >
              <AppGrid />
            </Suspense>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

