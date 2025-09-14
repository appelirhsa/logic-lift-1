import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LMSSidebar } from "./LMSSidebar";
import { LMSHeader } from "./LMSHeader";
import { Footer } from "./Footer";

interface LMSLayoutProps {
  children: React.ReactNode;
}

export function LMSLayout({ children }: LMSLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <LMSSidebar />
        <main className="flex-1 flex flex-col">
          <LMSHeader />
          <div className="flex-1 p-6">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
}