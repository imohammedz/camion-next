"use client"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { loginSchema } from "@/lib/zod-schemas"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  title: string
  description: string
  formData: LoginFormData
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: { [key: string]: string }
  generalError: string
  handleSubmit: (e: React.FormEvent) => void
}

const LoginForm: React.FC<LoginFormProps> = ({
  title,
  description,
  formData,
  handleChange,
  errors,
  generalError,
  handleSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);
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
        <div className="space-y-2">
          <Label htmlFor="email">Email or User Name</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="name@example.com or username"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            className={`${errors.password ? "border-red-500" : ""} pr-10`} // extra padding for icon
          />
          {formData.password.length > 0 && (
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          )}
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
