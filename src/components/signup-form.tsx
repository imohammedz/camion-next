"use client"

import type React from "react"

import type { signupSchema } from "@/lib/zod-schemas"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { z } from "zod"
import RegularSelect from "@/components/regular-select"
import { PhoneInput } from "./phone-input"
import { USER_ROLES } from "@/lib/constants"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

type SignupFormData = z.infer<typeof signupSchema>

interface SignupFormProps {
  title: string
  description: string
  formData: SignupFormData
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: { [key: string]: string }
  generalError: string
  handleSubmit: (e: React.FormEvent) => void
  handlePhoneChange: (value: string) => void
}

const SignupForm: React.FC<SignupFormProps> = ({
  title,
  description,
  formData,
  handleChange,
  errors,
  generalError,
  handleSubmit,
  handlePhoneChange,
}) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {generalError && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{generalError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="userName">User Name</Label>
          <Input
            id="userName"
            name="userName"
            type="text"
            placeholder="username"
            value={formData.userName}
            onChange={handleChange}
            className={errors.userName ? "border-red-500" : ""}
          />
          {errors.userName && <p className="text-sm text-red-500 mt-1">{errors.userName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <PhoneInput value={formData.phoneNumber || ""} onChange={(value) => handlePhoneChange(value || "")} />
          {errors.phoneNumber && <p className="text-sm text-red-500 mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="space-y-2">
          <RegularSelect value={formData.role} onChange={handleChange} options={USER_ROLES} error={errors.role} />
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "border-red-500" : ""}
            />
          </div>
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "border-red-500" : ""}
            />
            {formData.confirmPassword && (
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            )}
          </div>
          {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
        </div>

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignupForm
