"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FLEET_ID_KEY } from "@/lib/constants";
import { getTrucksByStatus } from "@/app/actions/truck";

export default function OverviewTab() {
  const searchParams = useSearchParams();
  const fleetId = searchParams.get(FLEET_ID_KEY);

  const [total, setTotal] = useState(0);
  const [availableCount, setAvailableCount] = useState(0);
  const [maintenanceCount, setMaintenanceCount] = useState(0);
  const [idleCount, setIdleCount] = useState(0);

  useEffect(() => {
    const fetchTruckStats = async () => {
      if (!fleetId) {
        console.error("Fleet ID not found");
        return;
      }
      const {
        availableTrucks,
        underMaintenance,
        idleTrucks,
        totalTrucks,
      } = await getTrucksByStatus(fleetId);

      setTotal(totalTrucks);
      setAvailableCount(availableTrucks.length);
      setMaintenanceCount(underMaintenance.length);
      setIdleCount(idleTrucks.length);
    };

    fetchTruckStats();
  }, [fleetId]);

  return (
    <div className="flex flex-col gap-6">
      {/* Truck Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Trucks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold">{total}</div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Truck className="mr-2 h-4 w-4" />
                Fleet capacity
              </div>
              <Button variant="link" className="px-0 h-auto text-sm text-blue-500 font-medium">
                LEARN MORE
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Trucks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-green-500">{availableCount}</div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Operational
              </div>
              <Button variant="link" className="px-0 h-auto text-sm text-blue-500 font-medium">
                LEARN MORE
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-amber-500">{maintenanceCount}</div>
              <div className="flex items-center text-muted-foreground text-sm">
                <span className="mr-2 text-amber-500">🔧</span>
                Scheduled services
              </div>
              <Button variant="link" className="px-0 h-auto text-sm text-blue-500 font-medium">
                LEARN MORE
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Idle Trucks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-slate-500">{idleCount}</div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="mr-2 h-4 w-4" />
                Available for assignment
              </div>
              <Button variant="link" className="px-0 h-auto text-sm text-blue-500 font-medium">
                LEARN MORE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Performance Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Fleet Performance</CardTitle>
          <p className="text-sm text-muted-foreground">Overall fleet metrics and performance indicators</p>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center border-t p-6">
          <div className="text-muted-foreground">Fleet performance chart would appear here</div>
        </CardContent>
      </Card>
    </div>
  );
}
