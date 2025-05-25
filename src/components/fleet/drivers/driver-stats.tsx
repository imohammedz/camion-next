import { Check, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { FLEET_ID_KEY } from "@/lib/constants";
import { useEffect, useState } from "react";
import { getDriversStatusByFleedId } from "@/app/actions/drivers";

export default function DriverStats() {
  const searchParams = useSearchParams();
  const fleetId = searchParams.get(FLEET_ID_KEY);

  const [stats, setStats] = useState({
    totalDrivers: 0,
    assignedDrivers: [],
    availableDrivers: [],
  });

  useEffect(() => {
    if (!fleetId) {
      console.error("Fleet ID not found");
      return;
    }

    const fetchData = async () => {
      try {
        const result = await getDriversStatusByFleedId(fleetId);
        setStats(result);
      } catch (error) {
        console.error("Failed to fetch driver stats:", error);
      }
    };

    fetchData();
  }, [fleetId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Drivers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">{stats.totalDrivers}</div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Users className="mr-2 h-4 w-4" />
              Fleet personnel
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Assigned Drivers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-blue-500">{stats.assignedDrivers.length}</div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="mr-2 h-4 w-4" />
              Currently on duty
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Available Drivers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-green-500">{stats.availableDrivers.length}</div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Check className="mr-2 h-4 w-4" />
              Ready for assignment
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}