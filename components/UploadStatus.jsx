import React from "react"
import cn from "clsx"

export function UploadStatus({ type }) {
  const status = {
    pending: {
      label: "pending",
      color: "border-green-500 text-green-600 bg-green-100",
    },
    uploading: {
      label: "uploading",
      color: "border-orange-500 text-orange-600 bg-orange-100",
    },
    completed: {
      label: "completed",
      color: "border-blue-500 text-blue-600 bg-blue-100",
    },
    error: {
      label: "error",
      color: "border-neutral-400 text-neutral-600 bg-neutral-100",
    },
  }
  if (!type || !status[type]) {
    return null
  }

  const { label, color } = status[type]

  return (
    <div
      className={cn(
        "text-xs w-20 text-center p-1 border leading-normal rounded-lg",
        color
      )}
    >
      {label}
    </div>
  )
}
