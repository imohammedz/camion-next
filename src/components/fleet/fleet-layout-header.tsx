"use client"

import { useEffect, useState } from "react"
import { LogOut, Moon, Sun, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import { useRouter, useSearchParams } from "next/navigation"
import { fetchFleetOrShipmentInfo } from "@/lib/helper"
import { supabase } from "@/lib/supabase"
import { FLEET_ID_KEY, SHIPMENT_ID_KEY } from "@/lib/constants"
import { FleetInfo, ShipmentInfo } from "@/lib/models"


export default function FleetHeader() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [fleetInfo, setFleetInfo] = useState<FleetInfo | null>(null)
  const [shipmentInfo, setShipmentInfo] = useState<ShipmentInfo | null>(null)
  const searchParams = useSearchParams()
  const fleetId = searchParams.get(FLEET_ID_KEY)
  const shipmentId = searchParams.get(SHIPMENT_ID_KEY)

  useEffect(() => {
    fetchFleetOrShipmentInfo(fleetId, shipmentId, setFleetInfo, setUserName, setShipmentInfo)
  }, [fleetId, shipmentId])


  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push("/login")
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Top Navigation Bar */}
      <header className="w-full border-b bg-white dark:bg-gray-950 sticky top-0 z-10 shadow-sm">
        <div className=" flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-red-600" />
            <span className="text-red-600 font-bold text-xl tracking-tight">Camion</span>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400 font-medium">
              {fleetId ? "FLEET OWNER" : "SHIMPEMT OWNER"}
            </Badge>

            <Separator orientation="vertical" className="h-6" />

            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border">
                <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                  {userName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden sm:inline">Welcome, {userName}</span>
            </div>

            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1.5">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
