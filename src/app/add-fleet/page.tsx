"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MapPin, Ship, Check, Loader2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { createFleet } from "../actions/fleet"

// Define the form schema with Zod
const formSchema = z.object({
    fleetName: z.string().min(2, { message: "Fleet name must be at least 2 characters" }),
    fleetBaseLocation: z.string().min(2, { message: "Base location is required" }),
    operationalStatus: z.enum(["FULLY_OPERATIONAL", "PARTIALLY_OPERATIONAL", "NON_OPERATIONAL"], {
        required_error: "Please select an operational status",
    }),
})

type FormValues = z.infer<typeof formSchema>

const operationalStatusOptions = [
    { label: "Fully Operational", value: "FULLY_OPERATIONAL" },
    { label: "Partially Operational", value: "PARTIALLY_OPERATIONAL" },
    { label: "Non Operational", value: "NON_OPERATIONAL" },
]

export default function AddFleetForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const route = useRouter()

    // Initialize react-hook-form with zod resolver
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fleetName: "",
            fleetBaseLocation: "",
            operationalStatus: "FULLY_OPERATIONAL",
        },
    })

    const handleSubmit = async (values: FormValues) => {
        setIsSubmitting(true)
        try {
            const result = await createFleet(values)
            route.push(`/dashboard?fleetId=${result.fleetId}`)
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="p-18">
            <Card className="w-full max-w-md mx-auto shadow-md">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Ship className="h-5 w-5" />
                        Add New Fleet
                    </CardTitle>
                    <CardDescription>Enter the details to register a new fleet in the system.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="fleetName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fleet Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter fleet name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="fleetBaseLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Base Location</FormLabel>
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
                                        <FormLabel>Operational Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {operationalStatusOptions.map((status) => (
                                                    <SelectItem key={status.value} value={status.value}>
                                                        <div className="flex items-center gap-2">
                                                            {status.value === "FULLY_OPERATIONAL" && (
                                                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                                            )}
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
                                            Create Fleet
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
