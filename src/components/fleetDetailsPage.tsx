// "use client";

// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   Edit,
//   Trash2,
//   MapPin,
//   CheckCircle,
//   TruckIcon,
//   PackageOpen,
//   Wrench,
//   Truck,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import type { Fleet } from "@/interfaces/fleet";
// import { TruckStatus } from "@/interfaces/enums/truckStatus";
// import StatCard from "@/components/stat-card";
// import { Separator } from "@radix-ui/react-select";
// import FleetTrucksTable from "./truck-detail-page";
// import  DriverDashBoard  from "./driverDashBoard";
// import DriverDashboard from "./driverDashBoard";
// // import UpdateFleetDialog from "@/components/fleets/update-fleet-dialog"
// // import FleetTrucksTable from "@/components/fleets/fleet-trucks-table"
// // import DriverDashboardPage from "@/components/drivers/driver-dashboard-page"

// type Props = {
//   fleetId: string;
// };

// export default function FleetDetailDashboard({ fleetId }: Props) {
//   const [activeTab, setActiveTab] = useState("overview");
//   const router = useRouter();
//   const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

//   // Mock data
//   const fleet = {
//     fleet_name: "LogiX Fleet Alpha",
//     fleet_base_location: "San Francisco, CA",
//     operational_status: "Operational",
//   };

//   const totalTrucks = 20;
//   const activeTrucks = 12;
//   const maintenance = 5;
//   const idle = 3;

//   return (
//     <div className="container py-8 max-w-7xl mx-auto">
//       <div className="p-2">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => router.back()}
//               className="rounded-full"
//             >
//               <ArrowLeft className="h-5 w-5" />
//             </Button>
//             <div>
//               <h1 className="text-2xl font-bold">{fleet.fleet_name}</h1>
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <MapPin className="h-4 w-4" />
//                 <span className="text-sm">{fleet.fleet_base_location}</span>
//                 <span className="text-sm">•</span>
//                 <CheckCircle className="h-4 w-4 text-green-500" />
//                 <span className="text-sm">{fleet.operational_status}</span>
//               </div>
//             </div>
//           </div>

//           {/* Edit & Delete Buttons */}
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               onClick={() => setIsUpdateDialogOpen(true)}
//               className="rounded-full"
//             >
//               <Edit className="mr-2 h-4 w-4" />
//               Edit
//             </Button>
//             <Button
//               variant="destructive"
//               onClick={() => alert("Delete clicked (mock)")}
//               className="rounded-full"
//             >
//               <Trash2 className="mr-2 h-4 w-4" />
//               Delete
//             </Button>
//           </div>
//         </div>

//         <Separator className="my-6" />

//         {/* Tabs Section */}
//         <Tabs
//           defaultValue="overview"
//           value={activeTab}
//           onValueChange={setActiveTab}
//           className="w-full"
//         >
//           <TabsList className="bg-background border w-full justify-start mb-6 p-1 rounded-xl">
//             <TabsTrigger
//               value="overview"
//               className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//             >
//               Overview
//             </TabsTrigger>
//             <TabsTrigger
//               value="trucks"
//               className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//             >
//               Trucks
//             </TabsTrigger>
//             <TabsTrigger
//               value="drivers"
//               className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//             >
//               Drivers
//             </TabsTrigger>
//             <TabsTrigger
//               value="shifts"
//               className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//             >
//               Shifts
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="overview">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <Card className="overflow-hidden border rounded-xl shadow-sm">
//                 <div className="h-1 bg-black"></div>
//                 <div className="p-6">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-muted-foreground">
//                         Total Trucks
//                       </p>
//                       <p className="text-3xl font-bold mt-1">{totalTrucks}</p>
//                       <p className="text-xs text-muted-foreground mt-1">
//                         Fleet capacity
//                       </p>
//                     </div>
//                     <div className="p-3 rounded-full bg-gray-100">
//                       <Truck className="h-5 w-5 text-gray-700" />
//                     </div>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="overflow-hidden border rounded-xl shadow-sm">
//                 <div className="h-1 bg-green-500"></div>
//                 <div className="p-6">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-muted-foreground">
//                         Active Trucks
//                       </p>
//                       <p className="text-3xl font-bold mt-1">{activeTrucks}</p>
//                       <p className="text-xs text-muted-foreground mt-1">
//                         Operational
//                       </p>
//                     </div>
//                     <div className="p-3 rounded-full bg-green-100">
//                       <TruckIcon className="h-5 w-5 text-green-600" />
//                     </div>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="overflow-hidden border rounded-xl shadow-sm">
//                 <div className="h-1 bg-orange-500"></div>
//                 <div className="p-6">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-muted-foreground">
//                         In Maintenance
//                       </p>
//                       <p className="text-3xl font-bold mt-1">{maintenance}</p>
//                       <p className="text-xs text-muted-foreground mt-1">
//                         Scheduled services
//                       </p>
//                     </div>
//                     <div className="p-3 rounded-full bg-orange-100">
//                       <Wrench className="h-5 w-5 text-orange-600" />
//                     </div>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="overflow-hidden border rounded-xl shadow-sm">
//                 <div className="h-1 bg-gray-500"></div>
//                 <div className="p-6">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-muted-foreground">
//                         Idle Trucks
//                       </p>
//                       <p className="text-3xl font-bold mt-1">{idle}</p>
//                       <p className="text-xs text-muted-foreground mt-1">
//                         Available for assignment
//                       </p>
//                     </div>
//                     <div className="p-3 rounded-full bg-gray-100">
//                       <PackageOpen className="h-5 w-5 text-gray-600" />
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>

//             {/* Fleet Performance Section */}
//             <div className="mt-8">
//               <Card className="shadow-sm border rounded-xl overflow-hidden">
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold">Fleet Performance</h3>
//                       <p className="text-muted-foreground">
//                         Overall fleet metrics and performance indicators
//                       </p>
//                     </div>
//                   </div>
//                   <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-muted/50">
//                     <p className="text-muted-foreground">
//                       Fleet performance chart would appear here
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </TabsContent>

//           <TabsContent value="trucks">
//             <Card className="shadow-sm border rounded-xl overflow-hidden">
//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-4">
//                   <TruckIcon className="h-5 w-5 text-primary" />
//                   <h2 className="text-xl font-semibold">Fleet Trucks</h2>
//                 </div>

//                 <FleetTrucksTable fleetId="your-fleet-id" />
//               </div>
//             </Card>
//           </TabsContent>

//           <TabsContent value="drivers">
//             <Card className="shadow-sm border rounded-xl overflow-hidden">
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-4">Fleet Drivers</h2>
//                 <div className="text-center p-8 border rounded-lg bg-muted/50">
//                 <DriverDashboard fleetId="your-fleet-id" />
//                 </div>
//               </div>
//             </Card>
//           </TabsContent>

//           <TabsContent value="shifts">
//             <Card className="shadow-sm border rounded-xl overflow-hidden">
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-4">
//                   Shifts Information
//                 </h2>
//                 <div className="text-center p-8 border rounded-lg bg-muted/50">
//                   <p className="text-muted-foreground">
//                     Shifts data would appear here
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
