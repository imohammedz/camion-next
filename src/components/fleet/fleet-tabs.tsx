"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DriverTab from "@/components/fleet/tabs/driver-tab";
import OverviewTab from "@/components/fleet/tabs/overview-tab";
import FleetTrucksTable from "./tabs/fleetTrucks";
import { ShiftTab } from "./tabs/shift-tab";

interface FleetTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function FleetTabs({ activeTab, onTabChange }: FleetTabsProps) {
  return (
    <Tabs defaultValue="drivers" className="mb-6" onValueChange={onTabChange}>
      <TabsList className="grid w-full grid-cols-4 max-w-md">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="trucks">Trucks</TabsTrigger>
        <TabsTrigger value="drivers">Drivers</TabsTrigger>
        <TabsTrigger value="shifts">Shifts</TabsTrigger>
      </TabsList>

      <TabsContent value="drivers" className="mt-6">
        <DriverTab />
      </TabsContent>

      <TabsContent value="overview">
        <OverviewTab />
      </TabsContent>

      <TabsContent value="trucks">
        <FleetTrucksTable />
      </TabsContent>

      <TabsContent value="shifts">
        <ShiftTab />
      </TabsContent>
    </Tabs>
  );
}
