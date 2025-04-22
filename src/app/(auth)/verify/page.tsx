"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Loader2 } from "lucide-react"
import { TruckLoader } from "@/components/truck-loader"

export default function VerifyPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<"loading" | "success" | "error" | "partial">("loading")
  const [message, setMessage] = useState("Verifying your email...")

  useEffect(() => {
    const verifyAndStoreUser = async () => {
      try {
        // Get current session to extract the access token
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession()

        if (sessionError || !session) {
          setStatus("error")
          setMessage("Failed to get session. Please try logging in again.")
          setLoading(false)
          return
        }

        const accessToken = session.access_token

        // Get the user (which includes metadata)
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        if (user) {
          const metadata = user.user_metadata

          const userPayload = {
            id: user.id,
            firstName: metadata.firstName,
            lastName: metadata.lastName,
            email: metadata.email,
            phoneNumber: metadata.phoneNumber,
            role: metadata.role,
            userName: metadata.userName,
          }

          // Call your backend API to store the user
          const saveRes = await fetch("/api/save-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(userPayload),
          })

          if (saveRes.ok) {
            setStatus("success")
            setMessage("Your email has been verified successfully!")
          } else {
            setStatus("partial")
            setMessage("Email verified, but we couldn't save your profile.")
          }

          setLoading(false)
        } else {
          setStatus("error")
          setMessage("Verification failed or expired.")
          setLoading(false)
        }
      } catch (error) {
        setStatus("error")
        setMessage("An unexpected error occurred. Please try again.")
        setLoading(false)
      }
    }

    verifyAndStoreUser()
  }, [])

  // Handle countdown and redirect
  useEffect(() => {
    if (!loading && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
      return () => clearTimeout(timer)
    } else if (!loading && countdown === 0) {
      //router.push("/login")
    }
  }, [countdown, loading, router])

  const getStatusIcon = () => {
    switch (status) {
      case "loading":
        return <Loader2 className="h-12 w-12 text-primary animate-spin" />
      case "success":
        return <CheckCircle className="h-12 w-12 text-green-500" />
      case "error":
        return <XCircle className="h-12 w-12 text-red-500" />
      case "partial":
        return <AlertTriangle className="h-12 w-12 text-amber-500" />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "loading":
        return "text-primary"
      case "success":
        return "text-green-600"
      case "error":
        return "text-red-600"
      case "partial":
        return "text-amber-600"
    }
  }

  const handleManualRedirect = () => {
    router.push("/login")
  }

  // Calculate progress percentage (inverted from countdown)
  const progressValue = ((5 - countdown) / 5) * 100

  // Get truck color based on status
  const getTruckColor = () => {
    switch (status) {
      case "loading":
        return "text-primary"
      case "success":
        return "text-green-500"
      case "error":
        return "text-red-500"
      case "partial":
        return "text-amber-500"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="mb-2">{getStatusIcon()}</div>
          <CardTitle className={`text-2xl font-bold ${getStatusColor()}`}>Email Verification</CardTitle>
          <CardDescription className="text-center">{message}</CardDescription>
        </CardHeader>
        <CardContent>
          {!loading && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}
                  </span>
                  <span>{Math.round(progressValue)}%</span>
                </div>
                <TruckLoader
                  value={100 - progressValue} // Inverted for RTL
                  truckClassName={getTruckColor()}
                  direction="rtl" // Right to left
                  onComplete={() => router.push("/login")}
                />
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {!loading && (
            <Button
              onClick={handleManualRedirect}
              className="w-full"
              variant={status === "success" ? "default" : "outline"}
            >
              Go to Login
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
