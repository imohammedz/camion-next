"use client"

import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for fleets
const mockFleets = [
  { id: "1", name: "North Region Fleet", trucks: 12, status: "active", location: "New York" },
  { id: "2", name: "South Region Fleet", trucks: 8, status: "maintenance", location: "Miami" },
  { id: "3", name: "West Region Fleet", trucks: 15, status: "active", location: "Los Angeles" },
  { id: "4", name: "East Region Fleet", trucks: 10, status: "inactive", location: "Boston" },
  { id: "5", name: "Central Fleet", trucks: 20, status: "active", location: "Chicago" },
]

const FleetManagementPage: React.FC = () => {
  const router = useRouter()
  //const [fleets, setFleets] = useState(mockFleets)
  const fleets =mockFleets
  // In a real app, you would fetch fleets from an API
  useEffect(() => {
    // Simulating API call
    console.log("Fetching fleets...")
    // setFleets(data from API)
  }, [])

  const handleViewFleet = (fleetId: string) => {
    router.push(`/fleets/${fleetId}`)
  }

  const handleEditFleet = (fleetId: string) => {
    router.push(`/fleets/${fleetId}/edit`)
  }

  const handleAddTrucks = (fleetId: string) => {
    router.push(`/fleets/${fleetId}/add-trucks`)
  }

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "active":
        return "default"
      case "maintenance":
        return "secondary"
      case "inactive":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="container px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Fleet Management</h1>

        <Button asChild>
          <Link href="/create-fleet">Create New Fleet</Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fleet Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Number of Trucks</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fleets.map((fleet) => (
              <TableRow key={fleet.id}>
                <TableCell className="font-medium">{fleet.name}</TableCell>
                <TableCell>{fleet.location}</TableCell>
                <TableCell>{fleet.trucks}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(fleet.status)}>
                    {fleet.status.charAt(0).toUpperCase() + fleet.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleViewFleet(fleet.id)}>
                      View
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleEditFleet(fleet.id)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleAddTrucks(fleet.id)}>
                      Add Trucks
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default FleetManagementPage

