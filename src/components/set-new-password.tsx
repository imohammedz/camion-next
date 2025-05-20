"use client"

import type React from "react"
import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Eye, EyeOff, Lock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

// Zod schema to validate new and confirm passwords
const passwordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })

export default function SetNewPassword() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const passwordStrength = calculatePasswordStrength(password)

    function calculatePasswordStrength(password: string): number {
        if (!password) return 0
        let strength = 0
        if (password.length >= 8) strength += 25
        if (/[A-Z]/.test(password)) strength += 25
        if (/[0-9]/.test(password)) strength += 25
        if (/[^A-Za-z0-9]/.test(password)) strength += 25
        return strength
    }

    const getStrengthLabel = (strength: number): string => {
        if (strength === 0) return "Empty"
        if (strength <= 25) return "Weak"
        if (strength <= 50) return "Fair"
        if (strength <= 75) return "Good"
        return "Strong"
    }

    const getStrengthColor = (strength: number): string => {
        if (strength === 0) return "bg-gray-200"
        if (strength <= 25) return "bg-red-500"
        if (strength <= 50) return "bg-yellow-500"
        if (strength <= 75) return "bg-blue-500"
        return "bg-green-500"
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        const result = passwordSchema.safeParse({ password, confirmPassword })

        if (!result.success) {
            const issue = result.error.issues[0]
            setError(issue.message)
            return
        }

        if (passwordStrength < 50) {
            setError("Please use a stronger password with uppercase letters, numbers, and special characters")
            return
        }

        setIsSubmitting(true)

        try {
            const { error } = await supabase.auth.updateUser({
                password: password,
            })
            if (error) {
                console.warn('Password update failed:', error.message);
                setError("Password updation faild. Please try again.")
                return;
            }
            setIsSubmitted(true)
        } catch (err) {
             console.info(err); 
            setError("An error occurred. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Set New Password</CardTitle>
                    <CardDescription>Create a new password for your account</CardDescription>
                </CardHeader>
                <CardContent>
                    {isSubmitted ? (
                        <Alert className="bg-green-50 border-green-200">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <AlertTitle>Password updated!</AlertTitle>
                            <AlertDescription>
                                Your password has been successfully updated. You can now log in with your new password.
                            </AlertDescription>
                        </Alert>
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
                                    <Label htmlFor="password">New Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="pr-10"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                                        </Button>
                                    </div>

                                    {password && (
                                        <div className="space-y-1 mt-2">
                                            <div className="flex justify-between text-xs">
                                                <span>Password strength:</span>
                                                <span
                                                    className={
                                                        passwordStrength <= 25
                                                            ? "text-red-500"
                                                            : passwordStrength <= 50
                                                                ? "text-yellow-500"
                                                                : passwordStrength <= 75
                                                                    ? "text-blue-500"
                                                                    : "text-green-500"
                                                    }
                                                >
                                                    {getStrengthLabel(passwordStrength)}
                                                </span>
                                            </div>
                                            <Progress value={passwordStrength} className={`h-1 ${getStrengthColor(passwordStrength)}`} />
                                            <ul className="text-xs text-gray-500 space-y-1 mt-2">
                                                <li className={password.length >= 8 ? "text-green-500" : ""}>• At least 8 characters</li>
                                                <li className={/[A-Z]/.test(password) ? "text-green-500" : ""}>• At least one uppercase letter</li>
                                                <li className={/[0-9]/.test(password) ? "text-green-500" : ""}>• At least one number</li>
                                                <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-500" : ""}>• At least one special character</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            className="pr-10"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                                        </Button>
                                    </div>
                                    {password && confirmPassword && (
                                        <p className={`text-xs mt-1 ${password === confirmPassword ? "text-green-500" : "text-red-500"}`}>
                                            {password === confirmPassword ? "Passwords match" : "Passwords do not match"}
                                        </p>
                                    )}
                                </div>

                                <Button type="submit" className="w-full" disabled={isSubmitting} >
                                    {isSubmitting ? "Updating..." : "Set New Password"}
                                </Button>
                            </div>
                        </form>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center border-t p-4">
                    {isSubmitted && (
                        <Button variant="link" className="gap-1" onClick={() => router.push("/login")}>
                            <Lock className="h-4 w-4" />
                            Go to login
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}
