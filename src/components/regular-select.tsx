import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface RegularSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  options: { value: string; label: string }[];
}

const RegularSelect: React.FC<RegularSelectProps> = ({ value, onChange, error, options }) => {
  return (
    <div>
      <Label htmlFor="role" className="mb-2">Role</Label>
      <Select
        value={value}
        onValueChange={(val) =>
          onChange({ target: { name: "role", value: val } } as React.ChangeEvent<HTMLInputElement>)
        }
      >
        <SelectTrigger className={`w-full ${error ? "border-red-500" : ""}`}>
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default RegularSelect;
