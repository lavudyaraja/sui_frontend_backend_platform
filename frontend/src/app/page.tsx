'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import { useIsMobile } from '@/lib/hooks/use-is-mobile';
import Dashboard from '@/components/dashboard/Dashboard';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <AppSidebar />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
        <Dashboard />
      </main>
    </SidebarProvider>
  );
}