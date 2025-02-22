import React from "react"
import HomePage from "./homepage.mdx"

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[90rem]">
      <div className="motion-reduce:transition-none [transition:background-color1.5sease]"></div>
      <div id="reach-skip-nav"></div>
      <article className="w-full break-words nextra-content flex min-h-[calc(100vh-var(--nextra-navbar-height))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]">
        <main className="w-full min-w-0  px-2 pt-4">
          <div className="grid grid-cols-3 mt-4">
            <div className="col-span-2 w-full  pl-20 pr-8">
              <HomePage />
            </div>

            <div className="w-full"></div>
          </div>
        </main>
      </article>
    </div>
  )
}
