"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import DriverStats from "@/components/fleet/drivers/driver-stats"
import DriversTable from "@/components/fleet/drivers/drivers-table"
import AddDriverModal from "../drivers/addDriverModel"

export default function DriverTab() {
  const [openAddDriver, setOpenAddDriver] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-xl font-bold">Driver Management</h3>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button variant="outline" size="sm" className="h-9">
            <Calendar className="mr-2 h-4 w-4" />
            Shift Schedule
          </Button>
          <Button size="sm" className="h-9" onClick={() => setOpenAddDriver(true)}>
            Add Driver
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search drivers..." className="pl-9" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              All Statuses
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>All Statuses</DropdownMenuItem>
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>On Leave</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Stats Cards */}
      <DriverStats />

      {/* Drivers Table */}
      <DriversTable />

      {/* Add Driver Modal */}
      <AddDriverModal
        open={openAddDriver}
        onClose={() => setOpenAddDriver(false)}
        onDriverAdded={() => {
          setOpenAddDriver(false)
          // Optional: Trigger re-fetch of drivers here
        }}
      />
    </div>
  )
}
