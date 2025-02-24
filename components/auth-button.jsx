import { memo } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth"

function PureAuthButton({ user }) {
  const { login, loading } = useAuth()
  if (loading || user) {
    return <></>
  }

  return (
    <Button
      className="cursor-pointer bg-black text-center hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all order-4 md:ml-auto mr-4"
      onClick={login}
    >
      Login with Github
    </Button>
  )
}

export const AuthButton = memo(PureAuthButton, (prevProps, nextProps) => {
  return prevProps.user === nextProps.user
})
