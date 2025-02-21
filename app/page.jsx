import React from "react"
import HomePage from "./homepage.mdx"
import Twitter from "@/components/twitter"
import Body from "@/components/body"
// const Twitter = dynamic(() => import("../components/twitter"), { ssr: false })

export default function Page() {
  return (
    <Body>
      <main className="w-full min-w-0  px-2 pt-4">
        <div className="grid grid-cols-3 mt-4">
          <div className="col-span-2 w-full  pl-20 pr-8">
            <HomePage />
          </div>

          <div className="w-full">
            <Twitter />
          </div>
        </div>
      </main>
    </Body>
  )
}
