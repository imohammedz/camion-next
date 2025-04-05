"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for a truck
const mockTruckData = {
  id: "101",
  model: "Volvo FH16",
  year: 2021,
  licensePlate: "XYZ-1234",
  status: "active",
  fleetId: "1",
  driver: "Michael Johnson",
}

interface EditTruckPageProps {
  truckId?: string
}

const EditTruckPage: React.FC<EditTruckPageProps> = ({ truckId }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    licensePlate: "",
    status: "",
    driver: "",
  })

  // In a real app, you would fetch truck details from an API using the truckId
  useEffect(() => {
    console.log(`Fetching details for truck ID: ${truckId}`)

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would fetch the truck data from an API
      // For now, we'll use mock data
      setFormData({
        model: mockTruckData.model,
        year: mockTruckData.year.toString(),
        licensePlate: mockTruckData.licensePlate,
        status: mockTruckData.status,
        driver: mockTruckData.driver,
      })
      setIsLoading(false)
    }, 500)
  }, [truckId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!formData.model || !formData.year || !formData.licensePlate) {
      setError("Please fill in all required fields")
      return
    }

    // Here you would typically make an API call to update the truck
    console.log("Updating truck:", { truckId, ...formData })

    // Redirect to truck details page after successful update
    router.push(`/trucks/${truckId}`)
  }

  if (isLoading) {
    return (
      <div className="container max-w-3xl px-4 py-10">
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

  return (
    <div className="container max-w-3xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Update Truck</CardTitle>
          <CardDescription>Edit the details of your truck</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="model">Truck Model</Label>
                <Input id="model" name="model" value={formData.model} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" name="year" type="number" value={formData.year} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licensePlate">License Plate</Label>
                <Input
                  id="licensePlate"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="driver">Driver</Label>
                <Input id="driver" name="driver" value={formData.driver} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={handleSelectChange}>
                  <SelectTrigger id="status">
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
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.push(`/trucks/${truckId}`)}>
              Cancel
            </Button>
            <Button type="submit">Update Truck</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default EditTruckPage

