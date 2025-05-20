"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const CreateAdvertisementPage: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: "",
    targetAudience: "",
    platform: "all",
    isActive: true,
  })

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
      platform: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      isActive: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically make an API call to create the advertisement
    console.log("Creating advertisement:", formData)

    // Redirect to home page after successful creation
    router.push("/")
  }

  return (
    <div className="container max-w-3xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create Advertisement</CardTitle>
          <CardDescription>Create a new advertisement campaign for your fleet</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Advertisement Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget ($)</Label>
                <Input
                  id="budget"
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="e.g., Businesses, Individuals, etc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select value={formData.platform} onValueChange={handleSelectChange}>
                <SelectTrigger id="platform">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="web">Website</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="email">Email Campaign</SelectItem>
                  <SelectItem value="print">Print Media</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="isActive" checked={formData.isActive} onCheckedChange={handleCheckboxChange} />
              <Label htmlFor="isActive">Activate immediately</Label>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.push("/")}>
              Cancel
            </Button>
            <Button type="submit">Create Advertisement</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default CreateAdvertisementPage

