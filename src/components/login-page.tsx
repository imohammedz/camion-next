"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "@/components/login-form"
import { loginSchema } from "@/lib/zod-schemas"
import { supabase } from "@/lib/supabase"
import HeaderWrapper from "./header-wrapper"
import { checkFleetConnection } from "@/app/actions/fleet"

type LoginFormData = z.infer<typeof loginSchema>

const LoginPage: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [generalError, setGeneralError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError("")

    try {
      // Validate form data against the schema
      loginSchema.parse(formData)

      const { email, password } = formData;

      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        console.warn("Login failed:", error.message)
        setGeneralError("Invalid email or password. Please try again.")
        return
      }

      const jwt = data.session?.access_token
      const refreshToken = data.session?.refresh_token

      if (!jwt) {
        console.error("JWT token not found")
        return
      }

      sessionStorage.setItem("accessToken", jwt)
      localStorage.setItem("refreshToken", refreshToken)
      sessionStorage.setItem("userEmail", email)

      const result = await checkFleetConnection(email);

      if (result.fleetConnected) {
        router.push(`/dashboard?fleetId=${result.fleetId}`)
      } else {
        router.push("/add-fleet")
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const fieldErrors: { [key: string]: string } = {}
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        setGeneralError("An unexpected error occurred. Please try again.")
      }
    }
  }

  return (
    <div>
      <HeaderWrapper />
      <div className="container flex items-center justify-center min-h-[80vh] px-4 py-10">
        <Card className="w-full max-w-md p-8">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          </CardHeader>
          <LoginForm
            title="Welcome Back"
            description="Log in to continue where you left off."
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            generalError={generalError}
            handleSubmit={handleSubmit}
          />
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href={`/signup`} className="text-primary underline-offset-4 hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
