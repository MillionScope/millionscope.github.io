// "use client"

// import { useState, useEffect } from "react"

// export default function Page() {
//   const [input, setInput] = useState("")
//   const [response, setResponse] = useState("")
//   const [isStreaming, setIsStreaming] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setResponse("") // Clear previous response
//     setIsStreaming(true)

//     const res = await fetch("http://localhost:8033/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt: input }),
//     })

//     if (!res.body) {
//       setResponse("Error: No response body")
//       setIsStreaming(false)
//       return
//     }

//     const reader = res.body.getReader()
//     const decoder = new TextDecoder()
//     let done = false

//     while (!done) {
//       const { value, done: readerDone } = await reader.read()
//       done = readerDone
//       if (value) {
//         const chunk = decoder.decode(value, { stream: true })
//         const lines = chunk.split("\n\n").filter((line) => line.startsWith("data: "))
//         for (const line of lines) {
//           const text = line.replace("data: ", "")
//           setResponse((prev) => prev + text)
//         }
//       }
//     }

//     setIsStreaming(false)
//   }

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>AI Text Streamer</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter your prompt"
//           style={{ padding: "10px", width: "300px", marginRight: "10px" }}
//           disabled={isStreaming}
//         />
//         <button type="submit" disabled={isStreaming}>
//           {isStreaming ? "Streaming..." : "Submit"}
//         </button>
//       </form>
//       <div style={{ marginTop: "20px" }}>
//         <h2>Response:</h2>
//         <pre style={{ whiteSpace: "pre-wrap" }}>{response || "No response yet"}</pre>
//       </div>
//     </div>
//   )
// }

// app/page.tsx
// app/page.tsx
// app/components/Chat.tsx
'use client'

import { useChat } from '@ai-sdk/react'
import { useState } from 'react'

export default function ChatComponent() {
  const [pending, setPending] = useState(false)

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'http://localhost:8033/chat/api', // Your Cloudflare Worker endpoint
    onResponse: (response) => {
      // Optional: Handle the response
      setPending(false)
    },
    onError: (error) => {
      console.error('Chat error:', error)
      setPending(false)
    }
  })

  const onSubmit = (e) => {
    setPending(true)
    handleSubmit(e)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg ${
              message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
            }`}
          >
            <p className="font-semibold">{message.role}</p>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={pending || !input}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {pending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  )
}