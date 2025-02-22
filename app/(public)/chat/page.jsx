"use client"

import { Chat } from "@/components/chat"
import { DataStreamHandler } from "@/components/data-stream-handler"
import { getCookie } from "@/utils/cookies"
import { useEffect, useState } from "react"

export default function Page() {
  const id = generateUUID()
  const [modelId, setModelId] = useState(null)

  // const cookieStore = await cookies();
  // const modelIdFromCookie = cookieStore.get('chat-model');
  useEffect(() => {
    const storedModelId = getCookie("chat-model")
    setModelId(storedModelId)
  }, [])

  if (!modelId) {
    return (
      <>
        <Chat key={id} id={id} initialMessages={[]} selectedChatModel={DEFAULT_CHAT_MODEL} selectedVisibilityType="private" isReadonly={false} />
        <DataStreamHandler id={id} />
      </>
    )
  }

  return (
    <>
      <Chat key={id} id={id} initialMessages={[]} selectedChatModel={modelIdFromCookie.value} selectedVisibilityType="private" isReadonly={false} />
      <DataStreamHandler id={id} />
    </>
  )
}
