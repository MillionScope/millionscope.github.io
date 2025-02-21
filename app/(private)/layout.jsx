import { ErrorBoundary } from "@/components/ErrorBoundary"
import Sidebar from "@/components/sidebar"
import { Callout } from "@/nextra"
import { File } from "@/nextra/sidebar"
// import { Sidebar } from "@/nextra/sidebar"
import React from "react"

export default function Layout({ children }) {
  return (
      <div className="mx-auto flex max-w-[90rem]">
        <Sidebar />
        <nav className="nextra-toc order-last max-xl:hidden w-64 shrink-0 print:hidden" aria-label="table of contents"></nav>
        <article className="w-full min-w-0 break-words min-h-[calc(100vh-var(--nextra-navbar-height))] text-slate-700 dark:text-slate-200 pb-8 px-6 pt-4 md:px-12">
          <main className="">{children}</main>
        </article>
      </div>
  )
}
