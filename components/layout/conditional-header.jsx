"use client"

import { useAuth } from "@/contexts/auth"

export default function ConditionalHeader() {
  // Never show header - it's handled within the landing page and chat layouts
  return null
}