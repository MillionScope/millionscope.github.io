import { Callout } from "@/nextra"
import { useSearchParams } from "next/navigation"

export function ErrorPage() {
  const searchParams = useSearchParams()
  const message = searchParams.get("message")

  return (
    <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
      <div className="inset-0 h-screen flex items-center justify-center  mx-auto">
        <Callout type="error" className="min-w-[500px]">
          <h2 className="text-xl font-bold">Unknow Error</h2>
          <div className="container py-2">
            <p className="mb-4">
              Please visit{" "}
              <a className="text-blue-500 underline" href="https://millionscope.github.io">
                HomePage
              </a>{" "}
              to get access again
            </p>
            <p className="text-sm">{message}</p>
          </div>
        </Callout>
      </div>
    </div>
  )
}
