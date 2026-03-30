"use client"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { DashboardNavbar } from "./_components/navbar/navbar"
import { DashboardSidebar } from "./_components/sidebar/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider className="englify-shell min-h-svh">
      <DashboardSidebar />
      <SidebarInset className="bg-[#F9FAFB] dark:bg-background">
        <DashboardNavbar />
        <div className="flex flex-1 flex-col gap-4 p-4 pb-8 md:p-6 md:pb-10">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
