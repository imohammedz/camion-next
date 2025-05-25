"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FLEET_ID_KEY } from "@/lib/constants";
import { createDriver } from "@/app/actions/drivers";
import { getTrucksForFleet } from "@/app/actions/truck";
import { DriverStatus } from "@/lib/enums";
import { Driver, Truck } from "@/lib/models";
import DriverDetails from "./driverDetails";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AddDriverModalProps {
  open: boolean;
  onClose: () => void;
  onDriverAdded: () => void;
}

const initialDriver: Partial<Driver> = {
  name: "",
  email: "",
  phone: "",
  registerId: "",
  license: "",
  experience: "",
  status: DriverStatus.AVAILABLE,
};

const AddDriverModal: React.FC<AddDriverModalProps> = ({
  open,
  onClose,
  onDriverAdded,
}) => {
  const searchParams = useSearchParams();
  const fleetId = searchParams.get(FLEET_ID_KEY);

  const [driver, setDriver] = useState<Partial<Driver>>({
    ...initialDriver,
    fleetId: fleetId ?? "",
  });

  const [trucks, setTrucks] = useState<Truck[]>([]);

  useEffect(() => {
    if (!fleetId) return;

    const fetchTrucks = async () => {
      try {
        const result = await getTrucksForFleet(fleetId);
        setTrucks(result);
      } catch (err) {
        console.error("Failed to load trucks:", err);
      }
    };

    fetchTrucks();
  }, [fleetId]);

  const handleDriverChange = (field: keyof Driver, value: string) => {
    setDriver((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createDriver(driver as Driver);
      onDriverAdded();
      onClose();
    } catch (err) {
      console.error("Driver creation failed:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Add Driver</DialogTitle>
          </DialogHeader>

          <DriverDetails
            driver={driver}
            handleDriverChange={handleDriverChange}
            trucks={trucks}
          />

          <DialogFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDriverModal;
