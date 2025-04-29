"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Pencil } from "lucide-react";
import error from "next/error";

type TruckStatus =
  | "AVAILABLE"
  | "UNDER_MAINTENANCE"
  | "OUT_OF_SERVICE"
  | "IN_TRANSIT"
  | "LOADING"
  | "UNLOADING"
  | "WAITING_FOR_ASSIGNMENT"
  | "ON_SALE"
  | "IDLE";

type Truck = {
  id: string;
  registration_number: string;
  truck_model: string;
  status: TruckStatus;
  capacity: number;
  mileage: number;
};

interface FleetTrucksTableProps {
  fleetId?: string;
}

const statusColors: Record<TruckStatus, string> = {
  AVAILABLE: "bg-green-500",
  UNDER_MAINTENANCE: "bg-yellow-500",
  OUT_OF_SERVICE: "bg-red-500",
  IN_TRANSIT: "bg-blue-500",
  LOADING: "bg-cyan-500",
  UNLOADING: "bg-cyan-500",
  WAITING_FOR_ASSIGNMENT: "bg-purple-500",
  ON_SALE: "bg-yellow-500",
  IDLE: "bg-gray-500",
};

const statusLabels: Record<TruckStatus, string> = {
  AVAILABLE: "Available",
  UNDER_MAINTENANCE: "Maintenance",
  OUT_OF_SERVICE: "Out of Service",
  IN_TRANSIT: "In Transit",
  LOADING: "Loading",
  UNLOADING: "Unloading",
  WAITING_FOR_ASSIGNMENT: "Awaiting Assignment",
  ON_SALE: "On Sale",
  IDLE: "Idle",
};

const FleetTrucksTable = ({ fleetId }: FleetTrucksTableProps) => {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  useEffect(() => {
    // Simulated static data
    const staticTrucks: Truck[] = [
      {
        id: "1",
        registration_number: "ABC123",
        truck_model: "Volvo FH16",
        status: "AVAILABLE",
        capacity: 12000,
        mileage: 45000,
      },
      {
        id: "2",
        registration_number: "DEF456",
        truck_model: "Scania R730",
        status: "UNDER_MAINTENANCE",
        capacity: 10000,
        mileage: 39000,
      },
      {
        id: "3",
        registration_number: "GHI789",
        truck_model: "MAN TGX",
        status: "IDLE",
        capacity: 9000,
        mileage: 50000,
      },
    ];
    setTrucks(staticTrucks);
  }, [fleetId]);

  return (
    <div className="py-6 space-y-4">
      {/* Title */}
  
      {/* Add Truck Button */}
      <div className="flex justify-end">
        <Button variant="default">
          + Add Truck
        </Button>
      </div>
  
      {/* Loading and Error Handling */}
    
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold w-[150px]">
                    Registration No
                  </TableCell>
                  <TableCell className="font-bold w-[200px]">Model</TableCell>
                  <TableCell className="font-bold w-[150px]">Status</TableCell>
                  <TableCell className="font-bold w-[120px] text-right">
                    Capacity (kg)
                  </TableCell>
                  <TableCell className="font-bold w-[120px] text-right">
                    Mileage (km)
                  </TableCell>
                  <TableCell className="font-bold w-[100px] text-center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
  
              <TableBody>
                {trucks && trucks.length > 0 ? (
                  trucks.map((truck) => (
                    <TableRow key={truck.registration_number}>
                      <TableCell>{truck.registration_number}</TableCell>
                      <TableCell>{truck.truck_model}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[truck.status]}>
                          {"Active"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {truck.capacity}
                      </TableCell>
                      <TableCell className="text-right">
                        {truck.mileage}
                      </TableCell>
                      <TableCell className="flex justify-center gap-2">
                        <Button size="icon" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          // onClick={() => handleUpdateTruckOpen(truck.id)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No trucks found for this fleet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
  
  
      {/* Modals
      <AddTrucksModal
        open={isAddModalOpen}
        onClose={handleCloseModal}
        fleetId={fleetId}
        onTruckAdded={handleTruckAdded}
      /> */}
      {/* <UpdateTruckModal
        open={isUpdateTruckOpen}
        onClose={handleUpdateTruckClose}
        truckId={truckId}
        onTruckUpdated={handleTruckAdded}
      /> */}
    </div>
  );
  
}
export default FleetTrucksTable;
