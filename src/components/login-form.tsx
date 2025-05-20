import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { loginSchema } from "@/lib/zod-schemas"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
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

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "border-red-500" : ""}
          />
          <div className="flex justify-end">
            <Button
              variant="none"
              type="button"
              className="text-sm text-black dark:text-white hover:underline cursor-pointer"
              onClick={() => router.push("/forget-password")}
            >
              Forget Password
            </Button>
          </div>
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
