"use client"

import { useState } from "react"
import FleetHeader from "@/components/fleet/fleet-header"
import FleetTabs from "@/components/fleet/fleet-tabs"

export default function FleetDashboard() {
  const [activeTab, setActiveTab] = useState("drivers")

  return (
    <div className="">
      <main className="">
        <FleetHeader />
        <FleetTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </main>
    </div>
  )
}
