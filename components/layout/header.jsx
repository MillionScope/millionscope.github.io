"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import Navbar from "./navbar"
import { cn } from "@/lib/utils"
import TwitterIcon from "@/icons/twitter"
import Github from "@/icons/github"
import { useAuth } from "@/contexts/auth"

const Logo = () => (
  <Link
    className={cn(
      "flex items-center px-24 hover:opacity-75",
      "ltr:mr-auto rtl:ml-auto",
      "transition-opacity duration-200"
    )}
    href="/"
  >
    <Image
      src="/logo.svg"
      width={25}
      height={25}
      style={{ height: "25px", width: "auto" }}
      className="w-auto"
      alt="MillionScope logo"
    />
    <span
      className={cn(
        "max-md:hidden select-none font-extrabold",
        "ltr:ml-2 rtl:mr-2"
      )}
      title="MillionScope: Research Community"
    >
      MillionScope
    </span>
  </Link>
)

function HeaderAuth() {
  const { user } = useAuth()

  if (user) {
    return null // Don't show anything in header when logged in
  }

  return (
    <Link
      href="/login"
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
    >
      Login
    </Link>
  )
}

export default function Header() {
  return (
    <Navbar>
      <Logo />
      <HeaderAuth />
      
      <Link
        href="https://genea-workshop.github.io/leaderboard"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
      >
        GENEA Workshop ↗
      </Link>
      
      <Link
        href="https://github.com/genea-workshop"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      
      <Link
        href="https://twitter.com/genea_workshop"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <TwitterIcon className="w-5 h-5" />
        <span className="sr-only">Twitter</span>
      </Link>
    </Navbar>
  )
}
