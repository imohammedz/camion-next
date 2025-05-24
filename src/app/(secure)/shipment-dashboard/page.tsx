"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Package, Plus, Search, Truck, MapPin, CalendarIcon, FileText, BarChart3 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Mock data
const shipmentStats = {
  total: 156,
  inTransit: 23,
  delivered: 128,
  pending: 5,
}

const mockShipments = [
  {
    id: "SH001",
    origin: "Mumbai, India",
    destination: "Delhi, India",
    status: "IN_TRANSIT",
    cargo: "Electronics",
    weight: 2500,
    pickupDate: "2024-01-15",
    deliveryDate: "2024-01-18",
  },
  {
    id: "SH002",
    origin: "Chennai, India",
    destination: "Bangalore, India",
    status: "DELIVERED",
    cargo: "Textiles",
    weight: 1800,
    pickupDate: "2024-01-10",
    deliveryDate: "2024-01-12",
  },
  {
    id: "SH003",
    origin: "Kolkata, India",
    destination: "Hyderabad, India",
    status: "CREATED",
    cargo: "Machinery",
    weight: 5000,
    pickupDate: "2024-01-20",
    deliveryDate: "2024-01-25",
  },
]

export default function ShipmentDashboard() {
  const [newShipment, setNewShipment] = useState({
    origin_location: "",
    destination_location: "",
    pickup_date: undefined as Date | undefined,
    delivery_date: undefined as Date | undefined,
    cargo_type: "",
    weight: "",
    assigned_truck_id: "",
  })

  const handleCreateShipment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating shipment:", newShipment)
    // Reset form
    setNewShipment({
      origin_location: "",
      destination_location: "",
      pickup_date: undefined,
      delivery_date: undefined,
      cargo_type: "",
      weight: "",
      assigned_truck_id: "",
    })
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      CREATED: "secondary",
      DISPATCHED: "default",
      IN_TRANSIT: "default",
      DELIVERED: "default",
    } as const

    const colors = {
      CREATED: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      DISPATCHED: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      IN_TRANSIT: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      DELIVERED: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    } as const

    return <Badge className={colors[status as keyof typeof colors]}>{status.replace("_", " ")}</Badge>
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Shipment Dashboard</h1>
        </div>
      </header>

      <main className="flex-1 space-y-4 p-4 md:p-8">
        <Tabs defaultValue="summary" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="create">Create Shipment</TabsTrigger>
            <TabsTrigger value="list">Shipment List</TabsTrigger>
            <TabsTrigger value="track">Track</TabsTrigger>
            <TabsTrigger value="update">Update Status</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{shipmentStats.total}</div>
                  <p className="text-xs text-muted-foreground">All time shipments</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Transit</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{shipmentStats.inTransit}</div>
                  <p className="text-xs text-muted-foreground">Currently moving</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Delivered</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{shipmentStats.delivered}</div>
                  <p className="text-xs text-muted-foreground">Successfully completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{shipmentStats.pending}</div>
                  <p className="text-xs text-muted-foreground">Awaiting dispatch</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Shipments</CardTitle>
                <CardDescription>Latest shipment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Cargo</TableHead>
                      <TableHead>Weight (kg)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockShipments.slice(0, 3).map((shipment) => (
                      <TableRow key={shipment.id}>
                        <TableCell className="font-medium">{shipment.id}</TableCell>
                        <TableCell>
                          {shipment.origin} → {shipment.destination}
                        </TableCell>
                        <TableCell>{getStatusBadge(shipment.status)}</TableCell>
                        <TableCell>{shipment.cargo}</TableCell>
                        <TableCell>{shipment.weight}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create New Shipment</CardTitle>
                <CardDescription>Add a new shipment to the system</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateShipment} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="origin">Origin Location</Label>
                      <Input
                        id="origin"
                        value={newShipment.origin_location}
                        onChange={(e) => setNewShipment((prev) => ({ ...prev, origin_location: e.target.value }))}
                        placeholder="Enter origin location"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination Location</Label>
                      <Input
                        id="destination"
                        value={newShipment.destination_location}
                        onChange={(e) => setNewShipment((prev) => ({ ...prev, destination_location: e.target.value }))}
                        placeholder="Enter destination location"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !newShipment.pickup_date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {newShipment.pickup_date ? format(newShipment.pickup_date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={newShipment.pickup_date}
                            onSelect={(date) => setNewShipment((prev) => ({ ...prev, pickup_date: date }))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Delivery Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !newShipment.delivery_date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {newShipment.delivery_date ? format(newShipment.delivery_date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={newShipment.delivery_date}
                            onSelect={(date) => setNewShipment((prev) => ({ ...prev, delivery_date: date }))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cargo_type">Cargo Type</Label>
                      <Input
                        id="cargo_type"
                        value={newShipment.cargo_type}
                        onChange={(e) => setNewShipment((prev) => ({ ...prev, cargo_type: e.target.value }))}
                        placeholder="e.g., Electronics, Textiles"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={newShipment.weight}
                        onChange={(e) => setNewShipment((prev) => ({ ...prev, weight: e.target.value }))}
                        placeholder="Enter weight in kg"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="truck_id">Assigned Truck ID</Label>
                      <Input
                        id="truck_id"
                        value={newShipment.assigned_truck_id}
                        onChange={(e) => setNewShipment((prev) => ({ ...prev, assigned_truck_id: e.target.value }))}
                        placeholder="Optional truck assignment"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Shipment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Shipments</CardTitle>
                <CardDescription>Complete list of shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Shipment ID</TableHead>
                      <TableHead>Origin</TableHead>
                      <TableHead>Destination</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Cargo Type</TableHead>
                      <TableHead>Weight (kg)</TableHead>
                      <TableHead>Pickup Date</TableHead>
                      <TableHead>Delivery Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockShipments.map((shipment) => (
                      <TableRow key={shipment.id}>
                        <TableCell className="font-medium">{shipment.id}</TableCell>
                        <TableCell>{shipment.origin}</TableCell>
                        <TableCell>{shipment.destination}</TableCell>
                        <TableCell>{getStatusBadge(shipment.status)}</TableCell>
                        <TableCell>{shipment.cargo}</TableCell>
                        <TableCell>{shipment.weight}</TableCell>
                        <TableCell>{shipment.pickupDate}</TableCell>
                        <TableCell>{shipment.deliveryDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="track" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Track Shipment</CardTitle>
                <CardDescription>Enter shipment ID to track its current status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Enter shipment ID (e.g., SH001)" className="flex-1" />
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Track
                  </Button>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-semibold">Shipment SH001 - Electronics</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Picked up from Mumbai, India</span>
                      <span className="text-xs text-muted-foreground ml-auto">Jan 15, 2024 09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">In transit - Passed Pune checkpoint</span>
                      <span className="text-xs text-muted-foreground ml-auto">Jan 16, 2024 02:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Currently at Nagpur hub</span>
                      <span className="text-xs text-muted-foreground ml-auto">Jan 17, 2024 08:15 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Expected delivery to Delhi, India</span>
                      <span className="text-xs text-muted-foreground ml-auto">Jan 18, 2024 06:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="update" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Update Shipment Status</CardTitle>
                <CardDescription>Update the status of existing shipments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shipment_id">Shipment ID</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shipment" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockShipments.map((shipment) => (
                          <SelectItem key={shipment.id} value={shipment.id}>
                            {shipment.id} - {shipment.cargo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new_status">New Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select new status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CREATED">Created</SelectItem>
                        <SelectItem value="DISPATCHED">Dispatched</SelectItem>
                        <SelectItem value="IN_TRANSIT">In Transit</SelectItem>
                        <SelectItem value="DELIVERED">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location_update">Current Location (Optional)</Label>
                  <Input id="location_update" placeholder="Enter current location" />
                </div>

                <Button className="w-full">Update Status</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Documents</CardTitle>
                <CardDescription>Manage invoices and shipping documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Generate Invoice</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shipment" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockShipments.map((shipment) => (
                            <SelectItem key={shipment.id} value={shipment.id}>
                              {shipment.id} - {shipment.cargo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button className="w-full">
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Invoice
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Shipping Documents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Bill of Lading
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Delivery Receipt
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Insurance Certificate
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
