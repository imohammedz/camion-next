"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PlusCircle, Trash2 } from "lucide-react"

// Mock data for a fleet
const mockFleetData = {
    id: "1",
    name: "North Region Fleet",
    location: "New York",
}

// Truck models for selection
const truckModels = [
    "Volvo FH16",
    "Mercedes-Benz Actros",
    "Scania R730",
    "MAN TGX",
    "DAF XF",
    "Iveco S-Way",
    "Renault T",
    "Kenworth W990",
    "Peterbilt 579",
    "Freightliner Cascadia",
]

interface AddTrucksPageProps {
    fleetId: string;
}


const AddTrucksPage: React.FC<AddTrucksPageProps> = ({ fleetId }) => {
    const router = useRouter()

    const [fleet, setFleet] = useState({
        id: "",
        name: "",
        location: "",
    })

    const [trucks, setTrucks] = useState([
        {
            id: Date.now().toString(),
            model: "",
            year: new Date().getFullYear().toString(),
            status: "active",
            licensePlate: "",
        },
    ])

    // ✅ Move setFleet into useEffect to avoid state updates during render
    useEffect(() => {
        console.log(`Fetching details for fleet ID: ${fleetId}`)
        // Simulate fetching data
        setFleet(mockFleetData)
    }, [fleetId])

    const handleAddTruck = () => {
        setTrucks([
            ...trucks,
            {
                id: Date.now().toString(),
                model: "",
                year: new Date().getFullYear().toString(),
                status: "active",
                licensePlate: "",
            },
        ])
    }

    const handleRemoveTruck = (id: string) => {
        setTrucks(trucks.filter((truck) => truck.id !== id))
    }

    const handleTruckChange = (id: string, field: string, value: string) => {
        setTrucks(
            trucks.map((truck) =>
                truck.id === id ? { ...truck, [field]: value } : truck
            )
        )
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const isValid = trucks.every(
            (truck) => truck.model && truck.year && truck.licensePlate
        )

        if (!isValid) {
            alert("Please fill in all required fields for each truck")
            return
        }

        console.log("Adding trucks to fleet:", { fleetId, trucks })
        router.push(`/fleets/${fleetId}`)
    }

    return (
        <div className="container max-w-4xl px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Add Trucks</h1>
                    <p className="text-muted-foreground">
                        Add trucks to fleet:{" "}
                        <Badge variant="outline">{fleet.name}</Badge>
                    </p>
                </div>

                <Button onClick={() => router.push(`/fleets/${fleetId}`)}>
                    Back to Fleet
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Truck Information</CardTitle>
                    <CardDescription>
                        Add one or more trucks to your fleet
                    </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                        {trucks.map((truck, index) => (
                            <div key={truck.id} className="space-y-4">
                                {index > 0 && <Separator />}

                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">Truck #{index + 1}</h3>
                                    {trucks.length > 1 && (
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleRemoveTruck(truck.id)}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Remove
                                        </Button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`model-${truck.id}`}>Truck Model</Label>
                                        <Select
                                            value={truck.model}
                                            onValueChange={(value) =>
                                                handleTruckChange(truck.id, "model", value)
                                            }
                                        >
                                            <SelectTrigger id={`model-${truck.id}`}>
                                                <SelectValue placeholder="Select model" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {truckModels.map((model) => (
                                                    <SelectItem key={model} value={model}>
                                                        {model}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`year-${truck.id}`}>Year</Label>
                                        <Input
                                            id={`year-${truck.id}`}
                                            type="number"
                                            min="1990"
                                            max={new Date().getFullYear() + 1}
                                            value={truck.year}
                                            onChange={(e) =>
                                                handleTruckChange(truck.id, "year", e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`licensePlate-${truck.id}`}>
                                            License Plate
                                        </Label>
                                        <Input
                                            id={`licensePlate-${truck.id}`}
                                            value={truck.licensePlate}
                                            onChange={(e) =>
                                                handleTruckChange(truck.id, "licensePlate", e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`status-${truck.id}`}>Status</Label>
                                        <Select
                                            value={truck.status}
                                            onValueChange={(value) =>
                                                handleTruckChange(truck.id, "status", value)
                                            }
                                        >
                                            <SelectTrigger id={`status-${truck.id}`}>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="maintenance">Maintenance</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleAddTruck}
                            className="w-full"
                        >
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Another Truck
                        </Button>
                    </CardContent>

                    <CardFooter className="flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.push(`/fleets/${fleetId}`)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">Save Trucks</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default AddTrucksPage
