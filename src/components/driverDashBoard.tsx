"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { MoreVertical, Search, CalendarDays, Plus, Eye, Pencil, Users, Truck, UserCheck } from "lucide-react"

export enum DriverStatus {
  ASSIGNED = "ASSIGNED",
  AVAILABLE = "AVAILABLE",
  ON_LEAVE = "ON_LEAVE",
}

interface Driver {
  name: string
  registerId: string
  phone: string
  status: DriverStatus
  truckRegisteredId: string | null
}

const staticDrivers: Driver[] = [
  {
    name: "John Doe",
    registerId: "DR001",
    phone: "1234567890",
    status: DriverStatus.ASSIGNED,
    truckRegisteredId: "TRK123",
  },
  {
    name: "Jane Smith",
    registerId: "DR002",
    phone: "9876543210",
    status: DriverStatus.AVAILABLE,
    truckRegisteredId: null,
  },
  {
    name: "Mike Johnson",
    registerId: "DR003",
    phone: "5678901234",
    status: DriverStatus.ON_LEAVE,
    truckRegisteredId: "TRK456",
  },
]

export default function DriverDashboard() {
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [filteredDrivers, setFilteredDrivers] = useState<Driver[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All Statuses")

  useEffect(() => {
    setDrivers(staticDrivers)
    setFilteredDrivers(staticDrivers)
  }, [])

  useEffect(() => {
    let result = [...drivers]
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(query) || d.registerId.toLowerCase().includes(query) || d.phone.includes(query),
      )
    }
    if (statusFilter !== "All Statuses") {
      result = result.filter((d) => d.status === statusFilter)
    }
    setFilteredDrivers(result)
  }, [searchQuery, statusFilter, drivers])

  const getBadgeVariant = (status: DriverStatus) => {
    switch (status) {
      case DriverStatus.ASSIGNED:
        return "info"
      case DriverStatus.AVAILABLE:
        return "success"
      case DriverStatus.ON_LEAVE:
        return "warning"
      default:
        return "secondary"
    }
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Driver Management</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <CalendarDays className="mr-2 h-4 w-4" />
            Shift Schedule
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Driver
          </Button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search drivers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Statuses">All Statuses</SelectItem>
            <SelectItem value="Assigned">Assigned</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="On Leave">On Leave</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Driver Counts Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="overflow-hidden border-0 shadow-md">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 h-1.5" />
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-muted-foreground mb-2">Total Drivers</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-4xl font-bold">{27}</span>
                </div>
                <p className="text-sm text-muted-foreground">Fleet personnel</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 h-1.5" />
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-muted-foreground mb-2">Assigned Drivers</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-blue-500">{15}</span>
                </div>
                <p className="text-sm text-muted-foreground">Currently on duty</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Truck className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 h-1.5" />
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-muted-foreground mb-2">Available Drivers</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-green-500">{7}</span>
                </div>
                <p className="text-sm text-muted-foreground">Ready for assignment</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <UserCheck className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drivers Table */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Drivers List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Assigned Truck</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver) => (
                  <TableRow key={driver.registerId}>
                    <TableCell>{driver.name}</TableCell>
                    <TableCell>{driver.registerId}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(DriverStatus.ASSIGNED)}>{driver.status}</Badge>
                    </TableCell>
                    <TableCell>{driver.phone}</TableCell>
                    <TableCell>{driver.truckRegisteredId || "Not Assigned"}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" /> View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No drivers found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Driver Modal */}
      {/* <AddDriverModal
        open={AddModel}
        onClose={handleCloseModal}
        onDriverAdded={handleAddDriver}
      /> */}
    </div>
  )
}
