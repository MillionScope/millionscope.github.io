"use client"

import React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/contexts/sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  // const user = {
  //   id: 8927701,
  //   name: "Thanh Hoang-Minh",
  //   email: "hmthanhgm@gmail.com",
  //   image: "https://avatars.githubusercontent.com/u/8927701?v=4",
  // }

  return (
    <>
      <SidebarProvider defaultOpen={!isCollapsed}>
        <AppSidebar  />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  )
}
