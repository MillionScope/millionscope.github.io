"use client"

import { useEffect, useState, useCallback } from "react"
import { codeToHtml } from "shiki"
import { SUPPORTED_LANGUAGES, CODE_THEMES, COMMON_STYLES } from "@/lib/constants/styles"

const getLanguageFromClassName = (className) => {
  const match = /language-(\w+)/.exec(className || "")
  const language = match ? match[1] : "text"
  return SUPPORTED_LANGUAGES.includes(language) ? language : "text"
}

const stripPreTags = (html) => html.replace(/<pre[^>]*>|<\/pre>/g, '')

export function CodeBlock({ node, inline, className, children, ...props }) {
  const language = getLanguageFromClassName(className)
  const [highlightedCode, setHighlightedCode] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const loadHighlighter = useCallback(async () => {
    if (inline) return

    try {
      const code = String(children).replace(/\n$/, "")
      
      const html = await codeToHtml(code, {
        lang: language,
        theme: CODE_THEMES.light,
      })
      
      setHighlightedCode(stripPreTags(html))
    } catch (error) {
      console.error("Failed to load Shiki highlighter:", error)
      // Fallback to plain text
      setHighlightedCode(String(children))
    } finally {
      setIsLoading(false)
    }
  }, [children, language, inline])

  useEffect(() => {
    loadHighlighter()
  }, [loadHighlighter])

  if (!inline) {
    return match ? (
      <code 
        className={`${COMMON_STYLES.code.block} language-${match[1]}`} 
        dangerouslySetInnerHTML={{ __html: highlightedCode }} 
      />
    ) : (
      <code className={COMMON_STYLES.code.inline}>
        {children}
      </code>
    )
  }

  return (
    <code 
      className={`${className} text-sm bg-transparent py-0.5 px-1 rounded-md`} 
      {...props}
    >
      {children}
    </code>
  )
}
