import { TruckStatus } from "./enums/truckStatus";

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