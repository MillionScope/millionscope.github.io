"use client"

import { useState } from "react"

export default function Page() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleStream = async () => {
    const response = await fetch("https://your-cloudflare-worker-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    })

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let result = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      result += decoder.decode(value, { stream: true })
      setOutput(result)
    }
  }

  return (
    <div>
      <h1>Stream Text with Cloudflare Worker</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your prompt" />
      <button onClick={handleStream}>Stream</button>
      <pre>{output}</pre>
    </div>
  )
}
