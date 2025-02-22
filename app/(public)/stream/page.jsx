"use client"

import { useState, useEffect } from "react"

export default function Page() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResponse("") // Clear previous response
    setIsStreaming(true)

    const res = await fetch("http://localhost:8033/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    })

    if (!res.body) {
      setResponse("Error: No response body")
      setIsStreaming(false)
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let done = false

    while (!done) {
      const { value, done: readerDone } = await reader.read()
      done = readerDone
      if (value) {
        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split("\n\n").filter((line) => line.startsWith("data: "))
        for (const line of lines) {
          const text = line.replace("data: ", "")
          setResponse((prev) => prev + text)
        }
      }
    }

    setIsStreaming(false)
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Text Streamer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
          disabled={isStreaming}
        />
        <button type="submit" disabled={isStreaming}>
          {isStreaming ? "Streaming..." : "Submit"}
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2>Response:</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>{response || "No response yet"}</pre>
      </div>
    </div>
  )
}
