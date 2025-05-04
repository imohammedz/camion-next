import { Calendar, Edit, MoreHorizontal, Trash2, Truck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DriversTable() {
  const drivers = [
    {
      id: "DVR-64880",
      name: "Ismail",
      status: "ON LEAVE",
      statusColor: "amber",
      contact: "9728767883287",
      assignedTruck: "AP_432432DF",
      avatar: "IS",
    },
    {
      id: "DVR-64881",
      name: "Rajesh",
      status: "ACTIVE",
      statusColor: "green",
      contact: "9876543210",
      assignedTruck: "AP_432433DF",
      avatar: "RA",
    },
    {
      id: "DVR-64882",
      name: "Suresh",
      status: "ACTIVE",
      statusColor: "green",
      contact: "9876543211",
      assignedTruck: "AP_432434DF",
      avatar: "SU",
    },
    {
      id: "DVR-64883",
      name: "Mahesh",
      status: "INACTIVE",
      statusColor: "red",
      contact: "9876543212",
      assignedTruck: "—",
      avatar: "MA",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Driver</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Assigned Truck</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{driver.avatar}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{driver.name}</span>
                </div>
              </TableCell>
              <TableCell className="font-mono text-sm">{driver.id}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    driver.statusColor === "green"
                      ? "success"
                      : driver.statusColor === "amber"
                        ? "warning"
                        : "destructive"
                  }
                >
                  {driver.status}
                </Badge>
              </TableCell>
              <TableCell>{driver.contact}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {driver.assignedTruck !== "—" && <Truck className="h-4 w-4 text-muted-foreground" />}
                  <span>{driver.assignedTruck}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
