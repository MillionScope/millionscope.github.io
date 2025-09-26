"use client"

import { Chat } from "@/components/chat"
import { DataStreamHandler } from "@/components/data-stream-handler"
import { LandingPage } from "@/components/landing-page"
import { LoadingSpinner } from "@/components/loading-spinner"
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models"
import { generateUUID } from "@/lib/utils"
import { getCookie } from "@/utils/cookies"
import { useAuth } from "@/contexts/auth"
import { useEffect, useState } from "react"

export default function Page() {
  const { user, loading } = useAuth()
  const id = generateUUID()
  const [modelId, setModelId] = useState(null)

  useEffect(() => {
    const storedModelId = getCookie("chat-model")
    setModelId(storedModelId)
  }, [])

  // Show loading state while checking authentication
  if (loading) {
    return <LoadingSpinner />
  }

  // Show landing page if user is not logged in
  if (!user) {
    return <LandingPage />
  }

  // Show chat interface if user is logged in
  const selectedModel = modelId || DEFAULT_CHAT_MODEL

  return (
    <>
      <Chat 
        key={id} 
        id={id} 
        initialMessages={[]} 
        selectedChatModel={selectedModel} 
        selectedVisibilityType="private" 
        isReadonly={false} 
      />
      <DataStreamHandler id={id} />
    </>
  )
}
