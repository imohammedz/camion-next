"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for a fleet
const mockFleetData = {
  id: "1",
  name: "North Region Fleet",
  location: "New York",
  manager: "John Smith",
  status: "active",
  description: "Fleet serving the northern region of the country",
}

interface UpdateFleetPageProps {
  fleetId?: string
}

const UpdateFleetPage: React.FC<UpdateFleetPageProps> = ({ fleetId }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    manager: "",
    status: "",
    description: "",
  })

  // In a real app, you would fetch fleet details from an API using the fleetId
  useEffect(() => {
    console.log(`Fetching details for fleet ID: ${fleetId}`)

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would fetch the fleet data from an API
      // For now, we'll use mock data
      setFormData({
        name: mockFleetData.name,
        location: mockFleetData.location,
        manager: mockFleetData.manager,
        status: mockFleetData.status,
        description: mockFleetData.description,
      })
      setIsLoading(false)
    }, 500)
  }, [fleetId])

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
    if (!formData.name || !formData.location) {
      setError("Please fill in all required fields")
      return
    }

    // Here you would typically make an API call to update the fleet
    console.log("Updating fleet:", { fleetId, ...formData })

    // Redirect to fleet details page after successful update
    router.push(`/fleets/${fleetId}`)
  }

  if (isLoading) {
    return (
      <div className="container max-w-3xl px-4 py-10">
        <Card>
          <CardContent className="py-10">
            <div className="flex justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
            <p className="text-center mt-4">Loading fleet data...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-3xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Update Fleet</CardTitle>
          <CardDescription>Edit the details of your fleet</CardDescription>
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
                <Label htmlFor="name">Fleet Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="manager">Fleet Manager</Label>
                <Input id="manager" name="manager" value={formData.manager} onChange={handleChange} />
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

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.push(`/fleets/${fleetId}`)}>
              Cancel
            </Button>
            <Button type="submit">Update Fleet</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default UpdateFleetPage

