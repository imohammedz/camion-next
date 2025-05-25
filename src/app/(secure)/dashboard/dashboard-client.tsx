"use client"

import { useState } from "react"
import { Suspense } from "react"
import FleetHeader from "@/components/fleet/fleet-header"
import FleetTabs from "@/components/fleet/fleet-tabs"


export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState("drivers")

  return (
    <div>
      <main>
        <Suspense fallback={<div>Loading header...</div>}>
          <FleetHeader />
        </Suspense>
        <Suspense fallback={<div>Loading tabs...</div>}>
          <FleetTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </Suspense>
      </main>
    </div>
  )
}
