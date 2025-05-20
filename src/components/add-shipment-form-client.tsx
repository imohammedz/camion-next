"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type * as z from "zod"
import { MapPin, Check, Loader2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useRouter, useSearchParams } from "next/navigation"
import { OPERATIONAL_STATUS_OPTIONS } from "@/lib/constants"
import { shipmentFormSchema } from "@/lib/zod-schemas"
import { createShipment } from "@/app/actions/shipment"

type FormValues = z.infer<typeof shipmentFormSchema>

export default function AddShipmentFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const userId = searchParams.get("userId")
  const router = useRouter()

  // Initialize react-hook-form with zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(shipmentFormSchema),
    defaultValues: {
      shipmentName: "",
      shipmentBaseLocation: "",
      operationalStatus: "FULLY_OPERATIONAL",
    },
  })

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true)
    try {
      const result = await createShipment(values, userId)
      router.push(`/dashboard?shipmentId=${result.shipmentId}`)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="shipmentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipment Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter shipment name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shipmentBaseLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-8" placeholder="City, Country" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="operationalStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipment Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {OPERATIONAL_STATUS_OPTIONS.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      <div className="flex items-center gap-2">
                        {status.value === "FULLY_OPERATIONAL" && <div className="h-2 w-2 rounded-full bg-green-500" />}
                        {status.value === "PARTIALLY_OPERATIONAL" && (
                          <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        )}
                        {status.value === "NON_OPERATIONAL" && <div className="h-2 w-2 rounded-full bg-red-500" />}
                        {status.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 pt-2 w-full">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                Create Shipment
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
