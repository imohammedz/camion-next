"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for a fleet
const mockFleetData = {
    id: "1",
    name: "North Region Fleet",
    location: "New York",
    manager: "John Smith",
    status: "active",
    description: "Fleet serving the northern region of the country",
    trucks: [
        { id: "101", model: "Volvo FH16", year: 2021, status: "active" },
        { id: "102", model: "Mercedes-Benz Actros", year: 2020, status: "maintenance" },
        { id: "103", model: "Scania R730", year: 2022, status: "active" },
        { id: "104", model: "MAN TGX", year: 2019, status: "active" },
    ],
    stats: {
        totalDistance: "125,000 km",
        fuelConsumption: "35,000 L",
        maintenanceCost: "$12,500",
        revenue: "$250,000",
    },
}

interface FleetDetailDashBoardProps {
    fleetId?: string
}

const FleetDetailDashBoard: React.FC<FleetDetailDashBoardProps> = ({ fleetId }) => {
    const router = useRouter()
    //const [fleet, setFleet] = useState(mockFleetData)
    const fleet = mockFleetData


    // In a real app, you would fetch fleet details from an API using the fleetId
    useEffect(() => {
        console.log(`Fetching details for fleet ID: ${fleetId}`)
        // Fetch fleet data and update state
        // setFleet(data from API)
    }, [fleetId])

    const handleEditFleet = () => {
        router.push(`/fleets/${fleet.id}/edit`)
    }

    const handleAddTrucks = () => {
        router.push(`/fleets/${fleet.id}/add-trucks`)
    }

    const handleViewTruck = (truckId: string) => {
        router.push(`/trucks/${truckId}`)
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
                <h1 className="text-3xl font-bold tracking-tight">Fleet Details</h1>

                <div className="flex gap-2">
                    <Button variant="outline" onClick={handleEditFleet}>
                        Edit Fleet
                    </Button>
                    <Button onClick={handleAddTrucks}>Add Trucks</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Fleet Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Fleet Name</p>
                            <p className="font-medium">{fleet.name}</p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{fleet.location}</p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Manager</p>
                            <p className="font-medium">{fleet.manager}</p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <Badge variant={getStatusVariant(fleet.status)}>
                                {fleet.status.charAt(0).toUpperCase() + fleet.status.slice(1)}
                            </Badge>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Description</p>
                            <p className="font-medium">{fleet.description}</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Fleet Statistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-sm text-muted-foreground">Total Distance</p>
                                        <p className="text-2xl font-bold">{fleet.stats.totalDistance}</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-sm text-muted-foreground">Fuel Consumption</p>
                                        <p className="text-2xl font-bold">{fleet.stats.fuelConsumption}</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-sm text-muted-foreground">Maintenance Cost</p>
                                        <p className="text-2xl font-bold">{fleet.stats.maintenanceCost}</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-sm text-muted-foreground">Revenue</p>
                                        <p className="text-2xl font-bold">{fleet.stats.revenue}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Trucks ({fleet.trucks.length})</CardTitle>
                            <Button size="sm" onClick={handleAddTrucks}>
                                Add Trucks
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {fleet.trucks.map((truck) => (
                                    <div key={truck.id} className="flex items-center justify-between p-2 border rounded-md">
                                        <div>
                                            <p className="font-medium">{truck.model}</p>
                                            <p className="text-sm text-muted-foreground">Year: {truck.year}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={getStatusVariant(truck.status)}>
                                                {truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
                                            </Badge>
                                            <Button variant="outline" size="sm" onClick={() => handleViewTruck(truck.id)}>
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FleetDetailDashBoard

