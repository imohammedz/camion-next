"use client";

import { useState, useEffect } from "react";
import { Truck } from "@/lib/models";
import { TruckStatus } from "@/lib/enums";
import TruckDetails from "../trucks/truckDetails";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createTrucksForFleet } from "@/app/actions/truck";

const initialTruck: Truck = {
  truckModel: "",
  registrationNumber: "",
  manufacturer: "",
  yearOfManufacture: "",
  capacity: "",
  dimensions: "",
  fuelType: "diesel",
  mileage: "",
  status: TruckStatus.AVAILABLE,
  fleetId: "",
  driverId: undefined,
};

interface AddTrucksModalProps {
  open: boolean;
  onClose: () => void;
  fleetId?: string;
  onTruckAdded: () => void;
}

const AddTrucksModal: React.FC<AddTrucksModalProps> = ({
  open,
  onClose,
  fleetId,
  onTruckAdded,
}) => {
  const [truck, setTruck] = useState<Truck>({ ...initialTruck });

  useEffect(() => {
    if (fleetId) {
      setTruck((prev) => ({ ...prev, fleetId }));
    }
  }, [fleetId]);

  const handleTruckChange = (field: keyof Truck, value: string) => {
    setTruck((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTrucksForFleet(truck);
      onTruckAdded();
      onClose();
    } catch (error) {
      console.error("Error adding truck:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add a Truck to Fleet</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <TruckDetails truck={truck} handleTruckChange={handleTruckChange} />
          <DialogFooter className="mt-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="default">
              Add Truck
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTrucksModal;