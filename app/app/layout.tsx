import { AppSidebar } from "@/components/navigation/components/app-sidebar"
import { HeaderBreadcrumb } from "@/components/navigation/components/app-header-breadcrumb"
import { ThemeIcon } from "@/components/navigation/components/theme-switch"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <HeaderBreadcrumb />
              <div className="grow" />
              <ThemeIcon />
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
    )
}
