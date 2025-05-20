"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Calendar,
  Clock,
  MapPin,
  PenToolIcon as Tool,
  Truck,
  FileText,
  BarChart2,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// === INTERFACES ===

interface Assignment {
  id: string
  type: string
  destination: string
  date: string
  status: string
}

interface Maintenance {
  id: string
  type: string
  date: string
  cost: string
  notes: string
}

interface Issue {
  id: string
  type: string
  description: string
  reportedDate: string
  status: string
}

interface TruckData {
  id: string
  model: string
  year: number
  licensePlate: string
  status: string
  fleetId: string
  fleetName: string
  driver: string
  lastMaintenance: string
  nextMaintenance: string
  fuelLevel: number
  mileage: number
  location: string
  assignments: Assignment[]
  maintenanceHistory: Maintenance[]
  issues: Issue[]
}

interface TruckDetailPageProps {
  truckId?: string
}

// === MOCK DATA ===

const mockTruckData: TruckData = {
  id: "101",
  model: "Volvo FH16",
  year: 2021,
  licensePlate: "XYZ-1234",
  status: "active",
  fleetId: "1",
  fleetName: "North Region Fleet",
  driver: "Michael Johnson",
  lastMaintenance: "2023-10-15",
  nextMaintenance: "2024-01-15",
  fuelLevel: 75,
  mileage: 45000,
  location: "New York City, NY",
  assignments: [
    { id: "a1", type: "Delivery", destination: "Boston, MA", date: "2023-11-20", status: "completed" },
    { id: "a2", type: "Pickup", destination: "Philadelphia, PA", date: "2023-11-25", status: "scheduled" },
    { id: "a3", type: "Delivery", destination: "Washington, DC", date: "2023-12-05", status: "scheduled" },
  ],
  maintenanceHistory: [
    { id: "m1", type: "Oil Change", date: "2023-10-15", cost: "$250", notes: "Regular maintenance" },
    { id: "m2", type: "Tire Replacement", date: "2023-08-20", cost: "$800", notes: "Replaced all tires" },
    { id: "m3", type: "Engine Inspection", date: "2023-06-10", cost: "$350", notes: "No issues found" },
  ],
  issues: [
    {
      id: "i1",
      type: "Warning",
      description: "Brake pads wearing thin",
      reportedDate: "2023-11-10",
      status: "pending",
    },
  ],
}

// === MAIN COMPONENT ===

const TruckDetailPage: React.FC<TruckDetailPageProps> = ({ truckId }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [truck, setTruck] = useState<TruckData | null>(null)

  useEffect(() => {
    console.log(`Fetching details for truck ID: ${truckId}`)
    setTimeout(() => {
      setTruck(mockTruckData)
      setIsLoading(false)
    }, 500)
  }, [truckId])

  const handleEditTruck = () => {
    router.push(`/trucks/${truckId}/edit`)
  }

  const handleBackToFleet = () => {
    if (truck) {
      router.push(`/fleets/${truck.fleetId}`)
    }
  }

  const getStatusVariant = (
    status: string,
  ): "default" | "secondary" | "destructive" | "outline" => {
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

  if (isLoading || !truck) {
    return (
      <div className="container px-4 py-10">
        <Card>
          <CardContent className="py-10">
            <div className="flex justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
            <p className="text-center mt-4">Loading truck data...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const upcomingAssignment = truck.assignments.find((a) => a.status === "scheduled")

  return (
    <div className="container px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{truck.model}</h1>
          <p className="text-muted-foreground flex items-center gap-1">
            <Truck className="h-4 w-4" />
            License Plate: {truck.licensePlate} | Year: {truck.year}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleBackToFleet}>
            Back to Fleet
          </Button>
          <Button onClick={handleEditTruck}>Edit Truck</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <Badge variant={getStatusVariant(truck.status)}>
                {truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
              </Badge>
              <span className="text-sm text-muted-foreground">Fleet: {truck.fleetName}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Fuel Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={truck.fuelLevel} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Empty</span>
                <span>{truck.fuelLevel}%</span>
                <span>Full</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mileage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{truck.mileage.toLocaleString()}</div>
              <span className="text-sm text-muted-foreground">kilometers</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Truck Information</CardTitle>
              <CardDescription>Detailed information about this truck</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Driver</p>
                  <p className="text-sm text-muted-foreground">{truck.driver}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Current Location</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {truck.location}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Last Maintenance</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(truck.lastMaintenance).toLocaleDateString()}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Next Maintenance</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(truck.nextMaintenance).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-1">
                <p className="text-sm font-medium">Upcoming Assignment</p>
                {upcomingAssignment ? (
                  <div className="rounded-md border p-3">
                    <div className="flex justify-between">
                      <p className="font-medium">{upcomingAssignment.type}</p>
                      <Badge variant="outline">
                        {new Date(upcomingAssignment.date).toLocaleDateString()}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Destination: {upcomingAssignment.destination}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No upcoming assignments</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>Past and upcoming assignments for this truck</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {truck.assignments.map((assignment) => (
                  <div key={assignment.id} className="rounded-md border p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{assignment.type}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {assignment.destination}
                        </div>
                      </div>
                      <Badge variant={assignment.status === "completed" ? "default" : "outline"}>
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(assignment.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance History</CardTitle>
              <CardDescription>Record of all maintenance activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {truck.maintenanceHistory.map((maintenance) => (
                  <div key={maintenance.id} className="rounded-md border p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{maintenance.type}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Tool className="h-4 w-4" />
                          Cost: {maintenance.cost}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(maintenance.date).toLocaleDateString()}
                      </div>
                    </div>
                    {maintenance.notes && (
                      <div className="flex items-start gap-1 text-sm text-muted-foreground mt-2">
                        <FileText className="h-4 w-4 mt-0.5" />
                        <span>{maintenance.notes}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Schedule Maintenance
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Issues and Alerts</CardTitle>
              <CardDescription>Current issues and alerts for this truck</CardDescription>
            </CardHeader>
            <CardContent>
              {truck.issues.length > 0 ? (
                <div className="space-y-4">
                  {truck.issues.map((issue) => (
                    <div key={issue.id} className="rounded-md border p-4 bg-muted/50">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-medium">
                            {issue.type}: {issue.description}
                          </h4>
                          <div className="flex justify-between items-center mt-1">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              Reported: {new Date(issue.reportedDate).toLocaleDateString()}
                            </div>
                            <Badge variant="outline">
                              {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <BarChart2 className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <h3 className="font-medium">No Issues Reported</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    This truck has no reported issues or alerts
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Report an Issue
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TruckDetailPage
