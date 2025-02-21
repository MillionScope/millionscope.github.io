import React from "react"

export default function ActionList({ actions }) {
  if (!actions || actions.length === 0) {
    return <></>
  }
  return (
    <div className="overflow-y-visible w-full max-h-96 border overflow-auto bg-gray-200 border-gray-300 rounded-lg p-2 ">
      <div className="flex gap-2 px-2 py-1 overflow-x-auto flex-wrap items-center">
        {Array.from(actions).map((action, index) => (
          <button title={action} className="border text-xs border-gray-500 bg-gray-400 px-2 py-0 rounded-lg text-center text-nowrap" key={index}>
            {action}
          </button>
        ))}
      </div>
    </div>
  )
}
