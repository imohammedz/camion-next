"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, ArrowLeft, CheckCircle2, RefreshCcw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getUserIdByEmail } from "@/app/actions/user"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ForgetPassword() {
    const [email, setEmail] = useState("")
    const [submittedEmail, setSubmittedEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError("Please enter a valid email address")
            return
        }

        const user = await getUserIdByEmail(email)

        if (!user?.userId) {
            setError("No account found with this email. Please register or try again.")
            return
        }

        setIsSubmitting(true)

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${process.env.NEXT_PUBLIC_FE_URL}/set-new-password`,
            })

            if (error) throw error

            setSubmittedEmail(email)
            setIsSubmitted(true)
        } catch (err) {
            console.error(err)
            setError("An error occurred while sending the reset email. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleResend = async () => {
        setError("")
        setIsSubmitting(true)

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(submittedEmail, {
                redirectTo: `${process.env.NEXT_PUBLIC_FE_URL}/set-new-password`,
            })

            if (error) throw error
        } catch (err) {
            console.error(err)
            setError("Failed to resend email. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Reset Password</CardTitle>
                    <CardDescription>Enter your email address and we&apos;ll send you a link to reset your password.</CardDescription>
                </CardHeader>

                <CardContent>
                    {isSubmitted ? (
                        <div className="space-y-4">
                            <Alert className="bg-green-50 border-green-200">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <AlertTitle>Email Sent!</AlertTitle>
                                <AlertDescription>
                                    A password reset link has been sent to:{" "}
                                    <span className="font-medium">{submittedEmail}</span>. <br />
                                    If you don&apos;t see it, check your spam folder.
                                </AlertDescription>
                            </Alert>

                            <div className="text-sm text-gray-600 text-center">
                                Didn’t receive the email?
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    type="button"
                                    onClick={handleResend}
                                    disabled={isSubmitting}
                                    className="gap-1"
                                    variant="secondary"
                                >
                                    <RefreshCcw className="h-4 w-4" />
                                    {isSubmitting ? "Resending..." : "Resend Email"}
                                </Button>
                            </div>

                            {error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {error && (
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Reset Link"}
                                </Button>
                            </div>
                        </form>
                    )}
                </CardContent>

                <CardFooter className="flex justify-center border-t p-4">
                    <Button variant="link" className="gap-1" onClick={() => router.push("/login")}>
                        <ArrowLeft className="h-4 w-4" />
                        Back to login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
