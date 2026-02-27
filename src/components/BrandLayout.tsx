import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BrandSidebar } from "@/components/BrandSidebar";

export function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <BrandSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
            <SidebarTrigger className="text-foreground" />
          </header>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
