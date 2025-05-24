import { Suspense } from "react"
import AddShipmentFormClient from "@/components/add-shipment-form-client"

export default function AddShipmentPage() {
  return (
    <div className="p-0">
      <Suspense fallback={<div>Loading form...</div>}>
        <AddShipmentFormWrapper />
      </Suspense>
    </div>
  )
}

async function AddShipmentFormWrapper() {
  // You can fetch any server-side data here if needed
  // const someData = await fetchSomeData()

  return <AddShipmentFormClient />
}
