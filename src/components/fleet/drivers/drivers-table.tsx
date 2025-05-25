"use client";

import {
  Calendar,
  Edit,
  MoreHorizontal,
  Trash2,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FLEET_ID_KEY } from "@/lib/constants";
import { getDriversByFleetId } from "@/app/actions/drivers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type Driver = {
  id: string;
  name: string;
  status: string;
  phone: string;
  assignedTruck?: string | null;
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "AVAILABLE":
      return "success";
    case "ON_LEAVE":
    case "ON_TRIP":
      return "warning";
    case "INACTIVE":
    case "SUSPENDED":
      return "destructive";
    default:
      return "default";
  }
};

export default function DriversTable() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const fleetId = searchParams.get(FLEET_ID_KEY);

  useEffect(() => {
    const fetchDrivers = async () => {
      if (!fleetId) return;

      setLoading(true);
      try {
        const result = await getDriversByFleetId(fleetId);
        const transformed = result.map((driver: Driver) => ({
          id: driver.id,
          name: driver.name,
          status: driver.status,
          phone: driver.phone,
          assignedTruck: driver.trucks?.[0]?.registrationNumber || "—",
        }));
        setDrivers(transformed);
      } catch (err) {
        console.error("Failed to fetch drivers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, [fleetId]);

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
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-4 w-8 ml-auto" />
                  </TableCell>
                </TableRow>
              ))
            : drivers.length > 0
            ? drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {driver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{driver.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {driver.id.slice(0, 8)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeColor(driver.status)}>
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {driver.assignedTruck !== "—" && (
                        <Truck className="h-4 w-4 text-muted-foreground" />
                      )}
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
              ))
            : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No drivers found for this fleet.
                </TableCell>
              </TableRow>
            )}
        </TableBody>
      </Table>
    </Card>
  );
}
