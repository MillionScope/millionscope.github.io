"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { API_ENDPOINT, GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI } from "@/config/constants"

const AuthContext = createContext({
  user: null,
  status: "loading",
  loading: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const cachedSession = localStorage.getItem("genea-session-authenicated")

      if (!cachedSession) {
        return
      }

      const { status, user } = JSON.parse(cachedSession)
      if (status === "authenticated") {
        setUser(user)
        setLoading(false)
        return
      } else if (status === "unauthenticated") {
        // console.log("API_ENDPOINT", `${API_ENDPOINT}/auth/user`)
        setAuthStatus("loading")
        // Fetch from the API if no cached user
        const res = await fetch(`${API_ENDPOINT}/auth/user`, {
          credentials: "include", // Important for sending cookies
        })

        if (res.ok) {
          const resJSON = await res.json()
          console.log("resJSON", resJSON)
          setUser(resJSON.data)
          localStorage.setItem("genea-session-authenicated", JSON.stringify({ status: "authenticated", user: resJSON.data })) // Cache user
          setAuthStatus("authenticated")
        } else {
          console.log("Login failed")
          localStorage.removeItem("genea-session-authenicated") // Remove cache if session is invalid
          setAuthStatus("unauthenticated")
        }
      }
    } catch (error) {
      console.error("Error checking user session:", error)
      localStorage.removeItem("genea-session-authenicated")
      setAuthStatus("unauthenticated")
    } finally {
      setLoading(false)
    }
  }

  const login = () => {
    const redirectURI = encodeURIComponent(GITHUB_REDIRECT_URI)
    console.log("redirectURI", redirectURI)
    localStorage.setItem("genea-session-authenicated", JSON.stringify({ status: "unauthenticated", user: null }))
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectURI}&scope=read:user user:email`
    window.location.href = githubAuthUrl
  }

  const logout = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/auth/logout`, {
        method: "POST",
        credentials: "include",
      })
    } catch (error) {
      console.error("Error during logout:", error)
    } finally {
      setUser(null)
      localStorage.removeItem("genea-session-authenicated")
      router.push("/")
    }
  }

  return <AuthContext.Provider value={{ user, loading, status: authStatus, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
