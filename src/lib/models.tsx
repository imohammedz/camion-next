import { DriverStatus, ShiftStatus, ShiftType, TruckStatus } from "./enums";

export interface FleetInfo {
  fleetName: string;
  fleetBaseLocation: string;
  operationalStatus: string;
}
export interface CreateUserInput {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  role?: string;
  userName?: string;
};

export interface FleetInfo {
  fleetName: string
  fleetBaseLocation: string
  operationalStatus: string
}
export interface ShipmentInfo {
  shipmentName: string
  shipmentBaseLocation: string
  operationalStatus: string
}

export interface Truck {
    id?: string; 
    truckModel: string;
    registrationNumber: string;
    manufacturer: string;
    yearOfManufacture: string;
    capacity: string;
    dimensions: string;
    fuelType: string;
    mileage: string;
    status: TruckStatus;
    fleetId: string;
    driverId?: string;
  }

 export interface Driver {
  id: string;
  name: string;
  email: string;
  registerId: string;
  phone: string;
  license: string;
  experience: string;
  status: DriverStatus;
  createdAt: string; 
  updatedAt: string; 
  fleetId?: string | null;
  shiftId?: string | null;
}

export interface Shift {
  id: string
  type: ShiftType
  salary: number
  activeAndDeactiveStatus: ShiftStatus;
  fleetId?: string
  assignedDrivers?: Driver[]
  createdAt: string
  updatedAt: string
  driversIds?: string[];
}