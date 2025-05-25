"use client";

import React from "react";
import { TruckStatus } from "@/lib/enums";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Truck } from "@/lib/models";

interface TruckDetailsProps {
  truck: Truck;
  handleTruckChange: (field: keyof Truck, value: string) => void;
}

export const TruckDetails: React.FC<TruckDetailsProps> = ({
  truck,
  handleTruckChange,
}) => {
  return (
    <div className="space-y-4">
      {[
        ["Truck Model", "truckModel"],
        ["Registration Number", "registrationNumber"],
        ["Manufacturer", "manufacturer"],
        ["Year of Manufacture", "yearOfManufacture"],
        ["Capacity (tons)", "capacity"],
        ["Dimensions", "dimensions"],
        ["Mileage (km/l)", "mileage"],
      ].map(([label, field]) => (
        <div key={field}>
          <Label>{label}</Label>
          <Input
            type="text"
            value={truck[field as keyof Truck] as string}
            onChange={(e) =>
              handleTruckChange(field as keyof Truck, e.target.value)
            }
          />
        </div>
      ))}

      <div>
        <Label>Fuel Type</Label>
        <Select
          value={truck.fuelType}
          onValueChange={(value) => handleTruckChange("fuelType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select fuel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="gasoline">Gasoline</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Status</Label>
        <Select
          value={truck.status}
          onValueChange={(value) => handleTruckChange("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(TruckStatus).map((status) => (
              <SelectItem key={status} value={status}>
                {status.replace(/_/g, " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TruckDetails;