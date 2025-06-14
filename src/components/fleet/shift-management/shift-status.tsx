import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarClock, CheckCircle, BarChart3, Users } from "lucide-react"
import { Shift } from "@/lib/models"
import { ShiftStatus } from "@/lib/enums"

interface ShiftStatsProps {
  shiftData: Shift[]
}

export function ShiftStats({ shiftData }: ShiftStatsProps) {
  const totalShifts = shiftData.length
  const activeShifts = shiftData.filter((s) => s.activeAndDeactiveStatus === ShiftStatus.ACTIVE).length
  const avgSalary = Math.round(shiftData.reduce((acc, s) => acc + s.salary, 0) / shiftData.length || 0)
  const maxSalary = Math.max(...shiftData.map((s) => s.salary), 0)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-2">
          <CardDescription>Total Shifts</CardDescription>
          <CardTitle className="text-2xl">{totalShifts}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarClock className="mr-2 h-4 w-4" />
            Active shift types
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader className="pb-2">
          <CardDescription>Active Shifts</CardDescription>
          <CardTitle className="text-2xl text-emerald-600">{activeShifts}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <CheckCircle className="mr-2 h-4 w-4" />
            Currently available
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-amber-500">
        <CardHeader className="pb-2">
          <CardDescription>Avg. Salary</CardDescription>
          <CardTitle className="text-2xl text-amber-600">₹{avgSalary.toLocaleString()}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <BarChart3 className="mr-2 h-4 w-4" />
            Per shift type
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="pb-2">
          <CardDescription>Highest Salary</CardDescription>
          <CardTitle className="text-2xl text-purple-600">₹{maxSalary.toLocaleString()}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-2 h-4 w-4" />
            Maximum earning
          </div>
        </CardContent>
      </Card>
    </div>
  )
}