"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface HeaderProps {
  toggleTheme: () => void
  darkMode: boolean
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, darkMode }) => {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white dark:bg-black transition-colors">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Fleet Management</span>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="theme-mode" checked={darkMode} onCheckedChange={toggleTheme} />
            <Label htmlFor="theme-mode" className="flex items-center gap-1 cursor-pointer">
              {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="sr-only md:not-sr-only md:inline-block">
                {darkMode ? "Dark" : "Light"} Mode
              </span>
            </Label>
          </div>

          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/fleet-management">Fleet Management</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/create-fleet">Create Fleet</Link>
          </Button>

          {pathname !== "/login" && (
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}

          {pathname !== "/signup" && (
            <Button variant="outline" asChild>
              <Link href="/signup">Signup</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
