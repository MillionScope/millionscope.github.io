import { Chat } from "@/components/chat"
import { DataStreamHandler } from "@/components/data-stream-handler"
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models"
import { convertToUIMessages } from "@/lib/utils"
import { getCookie } from "@/utils/cookies"
import { apiFetcher } from "@/utils/fetcher"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
// import { getChatById, getMessagesByChatId } from "@/lib/db/queries"

export default function ChatPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id") // Extract the `id` from the URL query params
  const [chat, setChat] = useState(null)
  const [messagesFromDb, setMessagesFromDb] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const [chatModelFromCookies, setChatModelFromCookies] = useState(null)

  console.log("id", id)

  async function getChatById() {
    apiFetcher(`/api/chat/${id}`)
  }

  function getMessagesByChatId() {
    console.log("getMessagesByChatId")
  }

  useEffect(() => {
    let chatModel = getCookie("chat-model")
    setChatModelFromCookies(chatModel)
  }, [])

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      try {
        const chatData = await getChatById({ id })
        if (!chatData) {
          throw new Error("Chat not found")
        }
        setChat(chatData)

        const messagesData = await getMessagesByChatId({ id })
        setMessagesFromDb(messagesData)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!chat) {
    return <div>Chat not found</div>
  }

  // Since we can't use cookies in a static context, we assume a default chat model
  const selectedChatModel = chatModelFromCookies ? chatModelFromCookies : DEFAULT_CHAT_MODEL

  return (
    <>
      <Chat
        id={chat.id}
        initialMessages={convertToUIMessages(messagesFromDb)}
        selectedChatModel={selectedChatModel}
        selectedVisibilityType={chat.visibility}
        isReadonly={false}
      />
      <DataStreamHandler id={id} />
    </>
  )
}
