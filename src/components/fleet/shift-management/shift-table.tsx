"use client";

import { format } from "date-fns";
import {
  Edit,
  CheckCircle,
  X,
  Eye,
  Plus,
  Trash2,
  MoreVertical,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shift } from "@/lib/models";
import { ShiftStatus, ShiftType } from "@/lib/enums";

interface ShiftTableProps {
  filteredShifts: Shift[];
  onEdit: (shift: Shift) => void;
  onToggleStatus: (shiftId: string) => void;
  onDelete: (shiftId: string) => void;
  onView: (shift: Shift) => void;
  onDuplicate: (shift: Shift) => void;
  formatShiftType: (type: ShiftType) => string;
  getShiftTypeColor: (type: ShiftType) => string;
}

export function ShiftTable({
  filteredShifts,
  onEdit,
  onToggleStatus,
  onDelete,
  onView,
  onDuplicate,
  formatShiftType,
  getShiftTypeColor,
}: ShiftTableProps) {
  if (filteredShifts.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border">
        <div className="px-6 py-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <CalendarClock className="h-12 w-12 text-gray-400" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                No shifts found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                No shifts match your current filters or you haven't created any
                shifts yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Shift Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Salary
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Created Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Assigned Drivers
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {filteredShifts.map((shift) => (
              <tr
                key={shift.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${getShiftTypeColor(
                        shift.type
                      )}`}
                    ></div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        {formatShiftType(shift.type)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        ID: {shift.id.slice(-8).toUpperCase()}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    ₹{shift.salary.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    per {shift.type.replace("_", " ")}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      shift.activeAndDeactiveStatus === ShiftStatus.DEACTIVE
                        ? "secondary"
                        : "success"
                    }
                    className="font-medium"
                  >
                    {shift.activeAndDeactiveStatus === ShiftStatus.ACTIVE
                      ? "Active"
                      : "Inactive"}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  {shift.createdAt ? (
                    <>
                      <div className="text-sm text-gray-900 dark:text-gray-100">
                        {format(new Date(shift.createdAt), "MMM dd, yyyy")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {format(new Date(shift.createdAt), "hh:mm a")}
                      </div>
                    </>
                  ) : (
                    <div className="text-sm text-gray-500 italic">N/A</div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {shift.assignedDrivers
                        ?.slice(0, 3)
                        .map((driver, index) => (
                          <Avatar
                            key={index}
                            className="h-8 w-8 border-2 border-white dark:border-gray-800"
                          >
                            <AvatarImage
                              src={"/placeholder.svg"}
                              alt={driver.name}
                            />
                            <AvatarFallback className="text-xs">
                              {driver.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      {shift.assignedDrivers &&
                        shift.assignedDrivers.length > 3 && (
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                              +{shift.assignedDrivers.length - 3}
                            </span>
                          </div>
                        )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {shift.assignedDrivers?.length || 0} drivers
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(shift)}
                      className="hover:b
g-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20"
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onToggleStatus(shift.id)}
                      className={
                        shift.activeAndDeactiveStatus === ShiftStatus.ACTIVE
                          ? "hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900/20"
                          : "hover:bg-amber-50 hover:border-amber-300 dark:hover:bg-amber-900/20"
                      }
                    >
                      {shift.activeAndDeactiveStatus === ShiftStatus.ACTIVE ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Activate
                        </>
                      ) : (
                        <>
                          <X className="h-3 w-3 mr-1" />
                          Deactivate
                        </>
                      )}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onView(shift)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onDuplicate(shift)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDelete(shift.id)}
                          className="text-red-600 dark:text-red-400"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
