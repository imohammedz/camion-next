"use client"

import { useThemeToggle } from "@/components/theme-toggle"
import Header from "@/components/header"

const HeaderWrapper = () => {
  const { darkMode, toggleTheme } = useThemeToggle()

  return <Header toggleTheme={toggleTheme} darkMode={darkMode} />
}

export default HeaderWrapper

