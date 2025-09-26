"use client"

import React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/contexts/sidebar"

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="relative flex h-full w-full flex-1 transition-colors z-0">
      <div className="relative flex h-full w-full flex-row">
        <SidebarProvider defaultOpen={!isCollapsed}>
          <AppSidebar />
          <div className="relative flex h-full max-w-full flex-1 flex-col">
            {/* Mobile header */}
            <div className="draggable h-header-height bg-token-bg-primary sticky top-0 z-10 flex items-center border-transparent px-2 md:hidden [box-shadow:var(--sharp-edge-top-shadow-placeholder)]">
              <div className="no-draggable flex items-center justify-center">
                <button 
                  type="button"
                  className="hover:text-token-text-primary touch:h-10 touch:w-10 inline-flex h-9 w-9 items-center justify-center rounded-md focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset active:opacity-50"
                  data-testid="open-sidebar-button" 
                  aria-expanded="false"
                  aria-controls="millionscope-sidebar"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" className="icon-lg text-token-text-secondary mx-2">
                    <path d="M11.6663 12.6686L11.801 12.6823C12.1038 12.7445 12.3313 13.0125 12.3313 13.3337C12.3311 13.6547 12.1038 13.9229 11.801 13.985L11.6663 13.9987H3.33325C2.96609 13.9987 2.66839 13.7008 2.66821 13.3337C2.66821 12.9664 2.96598 12.6686 3.33325 12.6686H11.6663ZM16.6663 6.00163L16.801 6.0153C17.1038 6.07747 17.3313 6.34546 17.3313 6.66667C17.3313 6.98788 17.1038 7.25586 16.801 7.31803L16.6663 7.33171H3.33325C2.96598 7.33171 2.66821 7.03394 2.66821 6.66667C2.66821 6.2994 2.96598 6.00163 3.33325 6.00163H16.6663Z" />
                  </svg>
                </button>
              </div>
              <div className="no-draggable flex-1">
                <button className="flex items-center gap-1 rounded-full py-2 ps-2.5 pe-3 text-sm font-medium bg-[#F1F1FB] text-[#5D5BD0] hover:bg-[#E4E4F6] dark:bg-[#373669] dark:text-[#DCDBF6] dark:hover:bg-[#414071]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon-sm w-4 h-4">
                    <path d="M10 2L13.09 8.26L20 9L15 13.74L16.18 20.5L10 17L3.82 20.5L5 13.74L0 9L6.91 8.26L10 2Z"/>
                  </svg>
                  MillionScope Plus
                </button>
              </div>
              <div className="no-draggable flex items-center justify-center">
                <span className="" data-state="closed">
                  <button className="btn relative btn-ghost text-token-text-secondary rounded-lg" aria-label="Turn on temporary chat">
                    <div className="flex w-full items-center justify-center gap-1.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" aria-label="" className="-mx-1 icon">
                        <path d="M4.52148 15.1664C4.61337 14.8108 4.39951 14.4478 4.04395 14.3559C3.73281 14.2756 3.41605 14.4295 3.28027 14.7074L3.2334 14.8334C3.13026 15.2324 3.0046 15.6297 2.86133 16.0287L2.71289 16.4281C2.63179 16.6393 2.66312 16.8775 2.79688 17.06C2.93067 17.2424 3.14825 17.3443 3.37402 17.3305L3.7793 17.3002C4.62726 17.2265 5.44049 17.0856 6.23438 16.8764C6.84665 17.1788 7.50422 17.4101 8.19434 17.558C8.55329 17.6348 8.9064 17.4062 8.9834 17.0473C9.06036 16.6882 8.83177 16.3342 8.47266 16.2572C7.81451 16.1162 7.19288 15.8862 6.62305 15.5815C6.50913 15.5206 6.38084 15.4946 6.25391 15.5053L6.12793 15.5277C5.53715 15.6955 4.93256 15.819 4.30566 15.9027C4.33677 15.8053 4.36932 15.7081 4.39844 15.6098L4.52148 15.1664Z" />
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </div>
            <div className="no-draggable bg-token-bg-primary flex w-full items-center justify-center md:hidden"></div>
            {children}
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
