"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eye, Pencil } from "lucide-react";
import AddTrucksModal from "./addTruckModel";
import { getTrucksForFleet } from "@/actions/trucks/trucks";

// UI-specific simplified truck type
type DisplayTruck = {
  id: string;
  registration_number: string;
  truck_model: string;
  status: TruckStatus;
  capacity: number;
  mileage: number;
};

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

const statusColors: Record<TruckStatus, { bg: string; text: string }> = {
  AVAILABLE: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  UNDER_MAINTENANCE: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  OUT_OF_SERVICE: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-600 dark:text-red-400",
  },
  IN_TRANSIT: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  LOADING: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  UNLOADING: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  WAITING_FOR_ASSIGNMENT: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  ON_SALE: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  IDLE: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-600 dark:text-slate-400",
  },
};

const statusLabels: Record<TruckStatus, string> = {
  AVAILABLE: "Available",
  UNDER_MAINTENANCE: "Under Maintenance",
  OUT_OF_SERVICE: "Out of Service",
  IN_TRANSIT: "In Transit",
  LOADING: "Loading",
  UNLOADING: "Unloading",
  WAITING_FOR_ASSIGNMENT: "Waiting",
  ON_SALE: "On Sale",
  IDLE: "Idle",
};

const FleetTrucksTable = () => {
  const [trucks, setTrucks] = useState<DisplayTruck[]>([]);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const id = params.id;
  const fleetId = id?.toString().substring(3);

  const fetchTrucks = async () => {
    if (!fleetId) return;
    try {
      const result = await getTrucksForFleet(fleetId);
      const transformed: DisplayTruck[] = result.map((truck: any) => ({
        id: truck.id,
        registration_number: truck.registrationNumber,
        truck_model: truck.truckModel,
        status: truck.status,
        capacity: parseInt(truck.capacity, 10) || 0,
        mileage: parseInt(truck.mileage ?? "0", 10),
      }));
      setTrucks(transformed);
    } catch (error) {
      console.error("Failed to fetch trucks:", error);
    }
  };

  useEffect(() => {
    fetchTrucks();
  }, [fleetId]);

  const handleTruckAdded = () => {
    fetchTrucks();
  };
  console.log("trucks", fleetId);

  return (
    <div className="py-6 space-y-6">
      <div className="flex justify-end">
        <Button
          variant="default"
          className="rounded-full bg-black hover:bg-black/90 text-white"
          onClick={() => setOpen(true)}
          
        >
          Add Truck
        </Button>
        {fleetId && (
          <AddTrucksModal
            open={open}
            onClose={() => setOpen(false)}
            fleetId={fleetId}
            onTruckAdded={handleTruckAdded}
          />
        )}
      </div>

      <Card className="border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="h-10 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                  Registration No
                </th>
                <th className="h-10 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                  Model
                </th>
                <th className="h-10 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                  Status
                </th>
                <th className="h-10 px-4 text-right text-sm font-medium text-gray-600 dark:text-gray-400">
                  Capacity (kg)
                </th>
                <th className="h-10 px-4 text-right text-sm font-medium text-gray-600 dark:text-gray-400">
                  Mileage (km)
                </th>
                <th className="h-10 px-4 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {trucks.length > 0 ? (
                trucks.map((truck) => (
                  <tr
                    key={truck.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium">
                      {truck.registration_number}
                    </td>
                    <td className="px-4 py-3">{truck.truck_model}</td>
                    <td className="px-4 py-3">
                      <Badge
                        className={`${statusColors[truck.status].bg} ${statusColors[truck.status].text} font-medium border-0 px-3 py-1 rounded-full`}
                      >
                        {statusLabels[truck.status]}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      {truck.capacity.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      {truck.mileage.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500">
                    No trucks found for this fleet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default FleetTrucksTable;
