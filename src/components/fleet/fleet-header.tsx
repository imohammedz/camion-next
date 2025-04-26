"use client"
import { ArrowLeft, Check, Edit, MapPin, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { apiService } from "@/app/api/api-service"
import { useEffect, useState } from "react";
import { FleetInfo } from "@/lib/models";
import { formatString } from "@/lib/helper";

export default function FleetHeader() {
  const [fleetInfo, setFleetInfo] = useState<FleetInfo | null>(null);

  useEffect(() => {
    const fetchFleet = async () => {
      try {
        const result = await apiService(`/api/fleet/get`, {
          method: "GET",
        });

        if (result) {
          setFleetInfo(result);
        }
      } catch (err: any) {
        console.info("Failed to fetch fleet info:", err);
      }
    };

    fetchFleet();
  }, []);
  return (
    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold">{fleetInfo?.fleetName}</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{fleetInfo?.fleetBaseLocation}</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span>{formatString(fleetInfo?.operationalStatus || "", ["_"], "capital")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <Button variant="outline" size="sm" className="h-9">
          <Edit className="mr-2 h-4 w-4" />
          EDIT
        </Button>
        <Button variant="destructive" size="sm" className="h-9">
          <Trash2 className="mr-2 h-4 w-4" />
          DELETE
        </Button>
      </div>
    </div>
  )
}
