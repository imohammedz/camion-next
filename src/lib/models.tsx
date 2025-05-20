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

