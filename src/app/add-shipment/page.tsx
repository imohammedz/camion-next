import { Suspense } from "react"
import AddShipmentFormClient from "@/components/add-shipment-form-client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship } from "lucide-react"

export default function AddShipmentPage() {
  return (
    <div className="p-18">
      <Card className="w-full max-w-md mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ship className="h-5 w-5" />
            Add New Shipment
          </CardTitle>
          <CardDescription>Enter the details to register a new shipment in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading form...</div>}>
            <AddShipmentFormWrapper />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

async function AddShipmentFormWrapper() {
  // You can fetch any server-side data here if needed
  // const someData = await fetchSomeData()

  return <AddShipmentFormClient />
}
