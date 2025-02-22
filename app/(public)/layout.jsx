"use client"

// import { AppSidebar } from "@/components/app-sidebar"
import React from "react"
import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <SidebarProvider defaultOpen={!isCollapsed}>
      {/* <AppSidebar user={session?.user} /> */}
      {children}
    </SidebarProvider>
  )
}
