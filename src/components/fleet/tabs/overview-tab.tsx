import {  PackageOpen, Truck, TruckIcon, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function OverviewTab() {

  const params = useSearchParams();
  const fleetId = params.get("id");
  useEffect(() => {
    
  })

  
  return (
    <TabsContent value="overview">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="overflow-hidden border rounded-xl shadow-sm">
        <div className="h-1 bg-black"></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Trucks
              </p>
              <p className="text-3xl font-bold mt-1">{7}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Fleet capacity
              </p>
            </div>
            <div className="p-3 rounded-full bg-gray-100">
              <Truck className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden border rounded-xl shadow-sm">
        <div className="h-1 bg-green-500"></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Trucks
              </p>
              <p className="text-3xl font-bold mt-1">{8}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Operational
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <TruckIcon className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden border rounded-xl shadow-sm">
        <div className="h-1 bg-orange-500"></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                In Maintenance
              </p>
              <p className="text-3xl font-bold mt-1">{3}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Scheduled services
              </p>
            </div>
            <div className="p-3 rounded-full bg-orange-100">
              <Wrench className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden border rounded-xl shadow-sm">
        <div className="h-1 bg-gray-500"></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Idle Trucks
              </p>
              <p className="text-3xl font-bold mt-1">{1}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Available for assignment
              </p>
            </div>
            <div className="p-3 rounded-full bg-gray-100">
              <PackageOpen className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </Card>
    </div>

    {/* Fleet Performance Section */}
    <div className="mt-8">
      <Card className="shadow-sm border rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Fleet Performance</h3>
              <p className="text-muted-foreground">
                Overall fleet metrics and performance indicators
              </p>
            </div>
          </div>
          <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-muted/50">
            <p className="text-muted-foreground">
              Fleet performance chart would appear here
            </p>
          </div>
        </div>
      </Card>
    </div>
  </TabsContent>
  )
}
