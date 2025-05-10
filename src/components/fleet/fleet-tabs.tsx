"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DriverTab from "@/components/fleet/tabs/driver-tab";
import OverviewTab from "@/components/fleet/tabs/overview-tab";
import FleetTrucksTable from "../truck-detail-page";
import DriverDashboard from "../driverDashBoard";

interface FleetTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function FleetTabs({ activeTab, onTabChange }: FleetTabsProps) {
  return (
    <Tabs defaultValue="drivers" className="mb-6" onValueChange={onTabChange}>
      <TabsList className="bg-background border w-full justify-start mb-6 p-1 rounded-xl">
        <TabsTrigger
          value="overview"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="trucks"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Trucks
        </TabsTrigger>
        <TabsTrigger
          value="drivers"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Drivers
        </TabsTrigger>
        <TabsTrigger
          value="shifts"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Shifts
        </TabsTrigger>
      </TabsList>

      <TabsContent value="drivers" className="mt-6">
        <DriverDashboard />
      </TabsContent>

      <TabsContent value="overview">
        <OverviewTab />
      </TabsContent>

      <TabsContent value="trucks">
        <FleetTrucksTable fleetId="your-fleet-id" />
      </TabsContent>

      <TabsContent value="shifts">
        <div className="flex items-center justify-center h-40 border rounded-md">
          <p className="text-muted-foreground">
            Shifts content will appear here
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
