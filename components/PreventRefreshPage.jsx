"use client"

import { useBeforeUnload } from "@/utils/hooks/before-unload"
import React from "react"

export default function PreventRefreshPage({ children }) {
  useBeforeUnload(
    "Gesture Generation Experiment will be reset, please don't refresh page before submit finish!"
  )
  return <>{children}</>
}
