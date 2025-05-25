import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DriverStatus } from "@/lib/enums";
import { Driver, Truck } from "@/lib/models";

interface DriverDetailsProps {
  driver: Partial<Driver>;
  trucks: Truck[];
  handleDriverChange: (field: keyof Driver, value: string) => void;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({
  driver,
  trucks,
  handleDriverChange,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={driver.name || ""}
          onChange={(e) => handleDriverChange("name", e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={driver.email || ""}
          onChange={(e) => handleDriverChange("email", e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={driver.phone || ""}
          onChange={(e) => handleDriverChange("phone", e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="license">License</Label>
        <Input
          id="license"
          value={driver.license || ""}
          onChange={(e) => handleDriverChange("license", e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="experience">Experience</Label>
        <Input
          id="experience"
          value={driver.experience || ""}
          onChange={(e) => handleDriverChange("experience", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          value={driver.status || DriverStatus.AVAILABLE}
          onValueChange={(value) =>
            handleDriverChange("status", value as DriverStatus)
          }
        >
          <SelectTrigger id="status">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(DriverStatus).map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="truck">Assign Truck</Label>
        <Select
          value={driver.registerId || "none"}
          onValueChange={(value) =>
            handleDriverChange("registerId", value === "none" ? "" : value)
          }
        >
          <SelectTrigger id="truck">
            <SelectValue placeholder="Select a truck" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            {trucks.map((truck) => (
              <SelectItem key={truck.id} value={truck.registrationNumber}>
                {truck.registrationNumber}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DriverDetails;
