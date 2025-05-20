import { getFleetInfoById } from "@/app/actions/fleet";
import { FleetInfo, ShipmentInfo } from "./models";
import { Dispatch, SetStateAction } from "react";
import { getUserIdByFleetId, getUserIdByShipmentId } from "@/app/actions/user";
import { getShipmentInfoById } from "@/app/actions/shipment";

export function formatString(
  input: string,
  symbolsToReplace: string[],
  caseOption: "capital" | "small" | "heading"
): string {
  let formatted = input;

  // Replace all specified symbols with a space
  for (const symbol of symbolsToReplace) {
    const regex = new RegExp(`\\${symbol}`, "g"); // escape special chars
    formatted = formatted.replace(regex, " ");
  }

  // Trim extra spaces
  formatted = formatted.trim().replace(/\s+/g, " ");

  // Apply case formatting
  if (caseOption === "capital") {
    return formatted.toUpperCase();
  } else if (caseOption === "small") {
    return formatted.toLowerCase();
  } else if (caseOption === "heading") {
    return formatted
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return formatted;
}


export async function fetchFleetOrShipmentInfo(
  fleetId?: string | null,
  shipmentId?: string | null,
  setFleetInfo?: (info: FleetInfo) => void,
  setUserName?: Dispatch<SetStateAction<string>>,
  setShipmentInfo?: Dispatch<SetStateAction<ShipmentInfo | null>>
) {
  try {
    if (fleetId) {
      const result = await getFleetInfoById(fleetId)
      const userINfo = await getUserIdByFleetId(fleetId)
      if (!result.error && result.fleetInfo) {
        setFleetInfo?.(result.fleetInfo)
      }
      if (!userINfo.error && userINfo.userDetails) {
        setUserName?.(userINfo.userDetails.firstName)
      }
    } else if (shipmentId) {
      const result = await getShipmentInfoById(shipmentId)
      const userINfo = await getUserIdByShipmentId(shipmentId)
      if (!result.error && result.shipmentInfo) {
        setShipmentInfo?.(result.shipmentInfo)
      }
      if (!userINfo.error && userINfo.userDetails) {
        setUserName?.(userINfo.userDetails.firstName)
      }
      // handle shipment info result here
    } else {
      console.warn("No fleetId or shipmentId found in query parameters.")
    }
  } catch (error) {
    console.error("Failed to fetch data:", error)
  }
}
