"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Phone, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CreateShipmentProfile() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    shipment_name: "",
    shipment_base_location: "",
    gst_number: "",
    dot_number: "",
    operational_status: "ACTIVE" as "ACTIVE" | "INACTIVE" | "UNDER_REVIEW",
    contact_person: "",
    contact_phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save to your database
    console.log("Shipment Profile Created:", formData)
    router.push("/shipment-dashboard")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Create Shipment Profile</h1>
        </div>
      </header>

      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Shipment Entity Setup</CardTitle>
              <CardDescription>
                Set up your shipment profile details. This is a one-time setup for your organization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shipment_name">Shipment Company Name</Label>
                    <Input
                      id="shipment_name"
                      value={formData.shipment_name}
                      onChange={(e) => handleInputChange("shipment_name", e.target.value)}
                      placeholder="Enter company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shipment_base_location">Base Location</Label>
                    <Input
                      id="shipment_base_location"
                      value={formData.shipment_base_location}
                      onChange={(e) => handleInputChange("shipment_base_location", e.target.value)}
                      placeholder="Enter base location"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gst_number">GST Number (India)</Label>
                    <Input
                      id="gst_number"
                      value={formData.gst_number}
                      onChange={(e) => handleInputChange("gst_number", e.target.value)}
                      placeholder="Enter GST number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dot_number">DOT Number (US)</Label>
                    <Input
                      id="dot_number"
                      value={formData.dot_number}
                      onChange={(e) => handleInputChange("dot_number", e.target.value)}
                      placeholder="Enter DOT number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="operational_status">Operational Status</Label>
                  <Select
                    value={formData.operational_status}
                    onValueChange={(value) => handleInputChange("operational_status", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select operational status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACTIVE">Active</SelectItem>
                      <SelectItem value="INACTIVE">Inactive</SelectItem>
                      <SelectItem value="UNDER_REVIEW">Under Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact_person">Contact Person</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact_person"
                        value={formData.contact_person}
                        onChange={(e) => handleInputChange("contact_person", e.target.value)}
                        placeholder="Enter contact person name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact_phone">Contact Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact_phone"
                        value={formData.contact_phone}
                        onChange={(e) => handleInputChange("contact_phone", e.target.value)}
                        placeholder="Enter contact phone"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    Create Profile
                  </Button>
                  <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
