"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return { darkMode, toggleTheme }
}

