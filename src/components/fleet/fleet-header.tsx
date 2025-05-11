"use client"
import { ArrowLeft, Check, Edit, MapPin, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { FleetInfo } from "@/lib/models";
import { formatString } from "@/lib/helper";
import { useParams } from "next/navigation";
import { getFleetInfoById } from "@/app/actions/fleet";

export default function FleetHeader() {
  const { fleetId } = useParams();
  const [fleetInfo, setFleetInfo] = useState<FleetInfo | null>(null);

  useEffect(() => {
    if (!fleetId || typeof fleetId !== "string") return;

    const fetchFleet = async () => {
      const result = await getFleetInfoById(fleetId);
      if (!result.error && result.fleetInfo) {
        setFleetInfo(result.fleetInfo);
      }
    };

    fetchFleet();
  }, [fleetId]);
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
