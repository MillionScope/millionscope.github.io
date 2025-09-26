export function LoadingSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-token-bg-primary">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        <div className="text-token-text-secondary text-sm">Loading MillionScope...</div>
      </div>
    </div>
  )
}