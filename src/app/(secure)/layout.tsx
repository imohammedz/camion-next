import type React from "react"
import { Suspense } from "react"
import FleetHeader from "@/components/fleet/fleet-layout-header"

export default function SecureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed header with Suspense boundary */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse">Loading header...</div>}>
          <FleetHeader />
        </Suspense>
      </header>

      {/* Push the content below the header */}
      <main className="flex-1 p-4 pt-20">{children}</main>
    </div>
  )
}
