"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, CheckCircle, AlertCircle, ArrowRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailConfirmationPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get("status") || "success" // Default to success if not specified
  const email = searchParams.get("email") || "user@example.com"

  const [isResending, setIsResending] = useState(false)

  const handleResendEmail = async () => {
    setIsResending(true)
    // Simulate email resending
    setTimeout(() => {
      setIsResending(false)
    }, 2000)

    // Actual implementation would call your email sending function
    // await resendVerificationEmail(email)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Card className="mx-auto max-w-md w-full border-black">
        <CardHeader className="space-y-1">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            {status === "success" ? (
              <CheckCircle className="h-10 w-10 text-black" />
            ) : (
              <AlertCircle className="h-10 w-10 text-black" />
            )}
          </div>
          <CardTitle className="text-center text-2xl font-bold">
            {status === "success" ? "Verification Email Sent" : "Failed to Send Email"}
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            {status === "success"
              ? "We've sent a verification link to your email address."
              : "We encountered an issue while sending the verification email."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-900">{email}</span>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            {status === "success" ? (
              <p>
                Please check your inbox and click on the verification link to complete your registration for the Fleet
                Management system.
              </p>
            ) : (
              <p>
                There was a problem sending the verification email. Please try again or contact support if the issue
                persists.
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          {status === "success" ? (
            <>
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-gray-100"
                onClick={handleResendEmail}
                disabled={isResending}
              >
                {isResending ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Resending...
                  </>
                ) : (
                  <>Resend Email</>
                )}
              </Button>
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={() => (window.location.href = "/login")}
              >
                Go to Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={handleResendEmail}
                disabled={isResending}
              >
                {isResending ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Trying Again...
                  </>
                ) : (
                  <>Try Again</>
                )}
              </Button>
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-gray-100"
                onClick={() => (window.location.href = "/support")}
              >
                Contact Support
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
