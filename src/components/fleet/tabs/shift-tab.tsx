"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShiftStats } from "@/components/fleet/shift-management/shift-status"
import { ShiftFilters } from "@/components/fleet/shift-management/shift-filters"
import { ShiftTable } from "@/components/fleet/shift-management/shift-table"
import { ShiftDialog } from "@/components/fleet/shift-management/shift-dialogue"
import { Shift, Driver } from "@/lib/models"
import { ShiftType, ShiftStatus } from "@/lib/enums"
import { useSearchParams } from "next/navigation"
import { FLEET_ID_KEY } from "@/lib/constants"
import { createShift, getShiftsByFleetId } from "@/app/actions/shift"
import { getDriversByFleetId } from "@/app/actions/drivers"

export function ShiftTab() {
  const [shiftData, setShiftData] = useState<Shift[]>([])
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<ShiftType | "all">("all")
  const [statusFilter, setStatusFilter] = useState<ShiftStatus | "all">("all")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingShift, setEditingShift] = useState<Shift | null>(null)
  const [newShift, setNewShift] = useState({
    type: ShiftType.MONTHLY,
    salary: 0,
    activeAndDeactiveStatus: ShiftStatus.ACTIVE,
    driversIds: [] as string[],
  })
  const searchParams = useSearchParams()
  const fleetId = searchParams.get(FLEET_ID_KEY) ?? ''

  // Fetch shifts and drivers when component mounts or fleetId changes
  useEffect(() => {
    const fetchData = async () => {
      if (fleetId) {
        await fetchShifts(fleetId)
        await fetchDrivers(fleetId)
      } else {
        console.error("No fleetId provided in URL query parameters")
      }
    }
    fetchData()
  }, [fleetId])

  const fetchShifts = async (fleetId: string) => {
    try {
      const shifts = await getShiftsByFleetId(fleetId)
      setShiftData(shifts)
    } catch (error) {
      console.error("Error fetching shifts:", error)
    }
  }

  const fetchDrivers = async (fleetId: string) => {
    try {
      const driversData = await getDriversByFleetId(fleetId)
      setDrivers(driversData as Driver[])
    } catch (error) {
      console.error("Error fetching drivers:", error)
    }
  }

  // Helper functions
  const formatShiftType = (type: ShiftType) => {
    const typeMap: Record<ShiftType, string> = {
      [ShiftType.MONTHLY]: "Monthly",
      [ShiftType.WEEKLY]: "Weekly",
      [ShiftType.TRIP_BASED]: "Trip Based",
      [ShiftType.KM]: "KM Based",
    }
    return typeMap[type] || type
  }

  const getShiftTypeColor = (type: ShiftType) => {
    const colorMap: Record<ShiftType, string> = {
      [ShiftType.MONTHLY]: "bg-blue-500",
      [ShiftType.WEEKLY]: "bg-emerald-500",
      [ShiftType.TRIP_BASED]: "bg-amber-500",
      [ShiftType.KM]: "bg-purple-500",
    }
    return colorMap[type] || "bg-gray-500"
  }

  // Filter shifts
  const filteredShifts = shiftData.filter((shift) => {
    const matchesSearch =
      formatShiftType(shift.type).toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === "all" || shift.type === typeFilter
    const matchesStatus =
      statusFilter === "all" || shift.activeAndDeactiveStatus === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  // Event handlers
const handleSaveShift = async () => {
  console.log("Received shift type in ShiftTab:", newShift.type, typeof newShift.type);
  const validShiftTypes = Object.values(ShiftType);
  if (!newShift.type || !validShiftTypes.includes(newShift.type)) {
    console.error("Invalid shift type: type is missing or invalid", {
      type: newShift.type,
    });
    return;
  }
  if (newShift.salary <= 0) {
    console.error("Invalid salary: salary must be greater than 0", {
      salary: newShift.salary,
    });
    return;
  }
  if (!fleetId) {
    console.error("Invalid fleetId: fleetId is missing", { fleetId });
    return;
  }

  try {
    console.log("Saving shift with data:", newShift);
    if (editingShift) {
      console.error("Shift editing is not yet supported");
      setShiftData((prev) =>
        prev.map((shift) =>
          shift.id === editingShift.id
            ? { ...shift, ...newShift, updatedAt: new Date().toISOString() }
            : shift
        )
      );
    } else {
      const newShiftData: Shift = {
        type: newShift.type,
        salary: newShift.salary,
        activeAndDeactiveStatus: newShift.activeAndDeactiveStatus,
        fleetId,
        driversIds: newShift.driversIds,
        assignedDrivers: [],
        id: "",
        createdAt: "",
        updatedAt: "",
      };

      console.log("Creating shift with:", newShiftData);
      const createdShift = await createShift(newShiftData);
      setShiftData((prev) => [...prev, createdShift]);
      console.log("Shift created successfully:", createdShift);
    }
    handleCloseDialog();
  } catch (error) {
    console.error("Error saving shift:", error);
  }
};

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setEditingShift(null)
    setNewShift({
      type: ShiftType.MONTHLY,
      salary: 0,
      activeAndDeactiveStatus: ShiftStatus.ACTIVE,
      driversIds: [],
    })
  }

  const handleEditShift = (shift: Shift) => {
    setEditingShift(shift)
    setNewShift({
      type: shift.type,
      salary: shift.salary,
      activeAndDeactiveStatus: shift.activeAndDeactiveStatus,
      driversIds: shift.driversIds || [],
    })
    setDialogOpen(true)
  }

  const handleToggleStatus = (shiftId: string) => {
    setShiftData((prev) =>
      prev.map((shift) =>
        shift.id === shiftId
          ? {
              ...shift,
              activeAndDeactiveStatus:
                shift.activeAndDeactiveStatus === ShiftStatus.ACTIVE
                  ? ShiftStatus.DEACTIVE
                  : ShiftStatus.ACTIVE,
              updatedAt: new Date().toISOString(),
            }
          : shift,
      ),
    )
    // TODO: Implement server action for updating shift status
  }

  const handleDeleteShift = (shiftId: string) => {
    if (confirm("Are you sure you want to delete this shift? This action cannot be undone.")) {
      setShiftData((prev) => prev.filter((shift) => shift.id !== shiftId))
      // TODO: Implement server action for deleting shift
    }
  }

  const handleViewShift = (shift: Shift) => {
    console.log("View shift details:", shift)
  }

  const handleDuplicateShift = (shift: Shift) => {
    const duplicatedShift: Shift = {
      ...shift,
      id: "", // Let backend assign a new ID
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      assignedDrivers: [],
      driversIds: [],
    }
    setShiftData((prev) => [...prev, duplicatedShift])
    // TODO: Implement server action for duplicating shift
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">Shift Management</h2>
          <p className="text-sm text-muted-foreground">Manage salary structures and shift types for your fleet</p>
        </div>
        <Button
          className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={() => setDialogOpen(true)}
        >
          <Plus className="h-4 w-4" />
          <span>Add Shift</span>
        </Button>
      </div>

      <ShiftStats shiftData={shiftData} />

      <ShiftFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <ShiftTable
        filteredShifts={filteredShifts}
        onEdit={handleEditShift}
        onToggleStatus={handleToggleStatus}
        onDelete={handleDeleteShift}
        onView={handleViewShift}
        onDuplicate={handleDuplicateShift}
        formatShiftType={formatShiftType}
        getShiftTypeColor={getShiftTypeColor}
      />

      <ShiftDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        editingShift={editingShift}
        newShift={newShift}
        setNewShift={setNewShift}
        onSave={handleSaveShift}
        onCancel={handleCloseDialog}
        drivers={drivers}
      />
    </div>
  )
}