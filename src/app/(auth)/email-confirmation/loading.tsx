import { RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <Card className="mx-auto max-w-md w-full border-black">
        <CardHeader className="space-y-1">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <RefreshCw className="h-10 w-10 animate-spin text-black" />
          </div>
          <CardTitle className="text-center text-2xl font-bold">Processing</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Please wait while we process your request...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="h-2 w-40 rounded-full bg-gray-200">
            <div className="h-2 animate-pulse rounded-full bg-black" style={{ width: "60%" }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
