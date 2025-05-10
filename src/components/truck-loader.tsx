"use client"

import { Truck } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

interface TruckProgressBarProps {
  value: number
  className?: string
  truckClassName?: string
  showPercentage?: boolean
  duration?: number
  direction?: "ltr" | "rtl"
  onComplete?: () => void
}

export function TruckLoader({
  value,
  className = "",
  truckClassName = "text-primary",
  showPercentage = false,
  duration = 5,
  direction = "ltr",
  onComplete,
}: TruckProgressBarProps) {
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    setCurrentValue(value)

    if ((direction === "ltr" && value === 100) || (direction === "rtl" && value === 0)) {
      if (onComplete) {
        onComplete()
      }
    }
  }, [value, direction, onComplete])

  // Calculate truck position based on direction
  const getTruckStyle = () => {
    if (direction === "ltr") {
      // Left to right: truck appears at the right edge of the progress
      return {
        left: `calc(${currentValue}% + 4px)`,
        transform: "translateY(-50%)",
        transition: "left 0.5s ease-out",
      }
    } else {
      // Right to left: truck appears at the left edge of the remaining progress
      // and we flip the truck horizontally
      return {
        right: `calc(${100 - currentValue}% + 4px)`,
        transform: "translateY(-50%) scaleX(-1)",
        transition: "right 0.5s ease-out",
      }
    }
  }

  return (
    <div className="space-y-2">
      {showPercentage && (
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{Math.round(currentValue)}%</span>
        </div>
      )}
      <div className="relative">
        <Progress value={currentValue} className={`h-2 ${className}`} />
        <div className="absolute top-1/2" style={getTruckStyle()}>
          <Truck className={`h-4 w-4 ${truckClassName}`} />
        </div>
      </div>
    </div>
  )
}
