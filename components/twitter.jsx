"use client"

import Link from "next/link"
import Script from "next/script"
import React, { useEffect } from "react"

export default function Twitter() {
  useEffect(() => {
    // Automatically accept cookies and load Twitter widgets after the component mounts
    if (window.twttr) {
      window.twttr.widgets.load()
    }
  }, [])

  return (
    <>
      <Link
        className="twitter-timeline"
        href="https://twitter.com/genea_workshop?ref_src=twsrc%5Etfw"
      >
        Tweets by genea_workshop
      </Link>
      <Script
        async
        strategy="afterInteractive"
        onLoad={() => {
          // Automatically accept cookies
          if (window.twttr) {
            window.twttr.widgets.load()
          }
        }}
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></Script>
    </>
  )
}
