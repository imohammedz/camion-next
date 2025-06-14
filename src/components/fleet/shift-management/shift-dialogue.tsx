"use client";

import { CalendarClock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ShiftType, ShiftStatus } from "@/lib/enums";
import { Shift, Driver } from "@/lib/models";
import { useState } from "react";

interface ShiftDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingShift: Shift | null;
  newShift: {
    type: ShiftType;
    salary: number;
    activeAndDeactiveStatus: ShiftStatus;
    driversIds: string[];
  };
  setNewShift: (shift: {
    type: ShiftType;
    salary: number;
    activeAndDeactiveStatus: ShiftStatus;
    driversIds: string[];
  }) => void;
  onSave: () => void;
  onCancel: () => void;
  drivers: Driver[];
}

export function ShiftDialog({
  open,
  onOpenChange,
  editingShift,
  newShift,
  setNewShift,
  onSave,
  onCancel,
  drivers,
}: ShiftDialogProps) {
  const [error, setError] = useState<string | null>(null);

  const handleDriverToggle = (driverId: string, checked: boolean) => {
    if (checked) {
      setNewShift({
        ...newShift,
        driversIds: [...newShift.driversIds, driverId],
      });
    } else {
      setNewShift({
        ...newShift,
        driversIds: newShift.driversIds.filter((id) => id !== driverId),
      });
    }
  };

  const handleSelectAllDrivers = (checked: boolean) => {
    if (checked) {
      setNewShift({
        ...newShift,
        driversIds: drivers.map((driver) => driver.id),
      });
    } else {
      setNewShift({
        ...newShift,
        driversIds: [],
      });
    }
  };

  const availableDrivers = drivers.filter(
    (driver) => !driver.shiftId || driver.shiftId === editingShift?.id
  );

  const getShiftTypeKey = (type: ShiftType | undefined | null): string => {
    if (!type) {
      return "MONTHLY";
    }
    return (
      Object.keys(ShiftType).find(
        (key) => ShiftType[key as keyof typeof ShiftType] === type
      ) || "MONTHLY"
    );
  };

  const getShiftTypeValue = (key: string): ShiftType => {
    const value = ShiftType[key as keyof typeof ShiftType];
    console.log("Converting key to ShiftType:", key, "Result:", value); // Debug log
    return value;
  };

  const getShiftTypeDisplayName = (type: ShiftType): string => {
    const typeMap: Record<ShiftType, string> = {
      [ShiftType.MONTHLY]: "Monthly",
      [ShiftType.WEEKLY]: "Weekly",
      [ShiftType.TRIP_BASED]: "Trip Based",
      [ShiftType.KM]: "KM Based",
    };
    return typeMap[type] || type.toString();
  };

  const isValidShiftType = (type: any): type is ShiftType => {
    return Object.values(ShiftType).includes(type);
  };

  const isFormValid = () => {
    return (
      isValidShiftType(newShift.type) &&
      newShift.salary > 0 &&
      !isNaN(newShift.salary)
    );
  };

  const handleSave = () => {
    if (!isFormValid()) {
      setError("Please select a valid shift type and enter a salary greater than 0.");
      return;
    }
    console.log("Sending to backend:", newShift); // Debug log
    setError(null);
    onSave();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5" />
            {editingShift ? "Edit Shift" : "Add New Shift"}
          </DialogTitle>
          <DialogDescription>
            {editingShift
              ? "Update the shift details below"
              : "Create a new shift type with salary structure"}
          </DialogDescription>
        </DialogHeader>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted!");
            handleSave();
          }}
        >
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="shift-type">Shift Type</Label>
              <Select
                value={getShiftTypeKey(newShift.type)}
                onValueChange={(key) => {
                  const newType = getShiftTypeValue(key);
                  console.log("Selected shift type:", key, "Enum value:", newType);
                  setNewShift({
                    ...newShift,
                    type: newType,
                  });
                }}
              >
                <SelectTrigger id="shift-type">
                  <SelectValue placeholder="Select shift type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MONTHLY">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      Monthly
                    </div>
                  </SelectItem>
                  <SelectItem value="WEEKLY">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      Weekly
                    </div>
                  </SelectItem>
                  <SelectItem value="TRIP_BASED">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      Trip Based
                    </div>
                  </SelectItem>
                  <SelectItem value="KM">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      KM Based
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="salary">Salary Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ₹
                </span>
                <Input
                  id="salary"
                  type="number"
                  placeholder="Enter salary amount"
                  className="pl-8"
                  value={newShift.salary || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewShift({
                      ...newShift,
                      salary: value === "" ? 0 : Number.parseFloat(value) || 0,
                    });
                  }}
                  min="0"
                  step="0.01"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Amount will be paid per{" "}
                {getShiftTypeDisplayName(newShift.type).toLowerCase()}
              </p>
            </div>

            <div className="grid gap-2">
              <Label className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Assign Drivers
              </Label>

              {availableDrivers.length > 0 ? (
                <div className="border rounded-md p-3 max-h-40 overflow-y-auto">
                  <div className="flex items-center space-x-2 mb-3 pb-2 border-b">
                    <Checkbox
                      id="select-all"
                      checked={
                        newShift.driversIds.length === availableDrivers.length &&
                        availableDrivers.length > 0
                      }
                      onCheckedChange={handleSelectAllDrivers}
                    />
                    <Label htmlFor="select-all" className="text-sm font-medium">
                      Select All ({availableDrivers.length} drivers)
                    </Label>
                  </div>

                  <div className="space-y-2">
                    {availableDrivers.map((driver) => (
                      <div key={driver.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={driver.id}
                          checked={newShift.driversIds.includes(driver.id)}
                          onCheckedChange={(checked) =>
                            handleDriverToggle(driver.id, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={driver.id}
                          className="text-sm flex-1 cursor-pointer"
                        >
                          {driver.name}
                          {driver.phone && (
                            <span className="text-muted-foreground ml-2">
                              ({driver.phone})
                            </span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="border rounded-md p-3 text-center text-muted-foreground">
                  <User className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No available drivers found</p>
                  <p className="text-xs">
                    All drivers may already be assigned to other shifts
                  </p>
                </div>
              )}

              {newShift.driversIds.length > 0 && (
                <p className="text-xs text-muted-foreground">
                  {newShift.driversIds.length} driver
                  {newShift.driversIds.length !== 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="deactivate"
                checked={newShift.activeAndDeactiveStatus === ShiftStatus.DEACTIVE}
                onCheckedChange={(checked) =>
                  setNewShift({
                    ...newShift,
                    activeAndDeactiveStatus: checked
                      ? ShiftStatus.DEACTIVE
                      : ShiftStatus.ACTIVE,
                  })
                }
              />
              <Label htmlFor="deactivate" className="text-sm">
                Deactivate this shift (drivers won't be able to select this shift)
              </Label>
            </div>
          </div>
        </form>

        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              console.log("Create shift button clicked!");
              console.log("Form data being saved:", newShift);
              console.log("Is form valid:", isFormValid());
              handleSave();
            }}
            className="mb-2 sm:mb-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={!isFormValid()}
            type="submit"
          >
            {editingShift ? "Update Shift" : "Create Shift"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}