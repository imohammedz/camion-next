import { Check, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DriverStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">4</div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Users className="mr-2 h-4 w-4" />
              Fleet personnel
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Assigned Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-blue-500">3</div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="mr-2 h-4 w-4" />
              Currently on duty
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Available Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-green-500">0</div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Check className="mr-2 h-4 w-4" />
              Ready for assignment
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
