"use client"

export function CodeBlock({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || "")
  if (!inline) {
    return match ? (
      <pre className="">
        <code className={`whitespace-pre-wrap break-words language-${match[1]}`}>{children}</code>
      </pre>
    ) : (
      <code className="whitespace-pre-wrap break-words px-1 py-0.5 dark:bg-gray-800 rounded-md">{children}</code>
    )
  } else {
    return (
      <code className={`${className} text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md`} {...props}>
        {children}
      </code>
    )
  }
}
