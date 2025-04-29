import { Card } from "@/components/ui/card"
import { Truck, TruckIcon, Wrench, PackageOpen, AlertTriangle, Activity } from 'lucide-react'

interface StatCardProps {
  title: string
  value: number
  subtitle: string
  color: "black" | "green" | "orange" | "gray"
  icon: "truck" | "truck-moving" | "wrench" | "truck-loading" | "alert" | "activity"
}

const colorMap = {
  black: "bg-black",
  green: "bg-green-500",
  orange: "bg-orange-500",
  gray: "bg-gray-500",
}

const iconMap = {
  "truck": Truck,
  "truck-moving": TruckIcon,
  "wrench": Wrench,
  "truck-loading": PackageOpen,
  "alert": AlertTriangle,
  "activity": Activity
}

export default function StatCard({ title, value, subtitle, color, icon }: StatCardProps) {
  const IconComponent = iconMap[icon]
  
  return (
    <Card className="overflow-hidden border rounded-xl shadow-sm">
      <div className={`h-1 ${colorMap[color]}`}></div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <div className={`p-3 rounded-full bg-${color === 'black' ? 'gray' : color}-100`}>
            <IconComponent className={`h-5 w-5 text-${color === 'black' ? 'gray-700' : `${color}-600`}`} />
          </div>
        </div>
      </div>
    </Card>
  )
}
