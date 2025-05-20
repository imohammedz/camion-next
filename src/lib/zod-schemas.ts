// Define the signup schema with Zod
import { z } from "zod"
import { isValidPhoneNumber } from "react-phone-number-input"

export const signupSchema = z
    .object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Please enter a valid email address"),
        userName: z.string().min(1, "Username is required"),
        phoneNumber: z.string().min(1,"Mobile number is required")
        .refine((val) => isValidPhoneNumber(val), {
            message: "Please enter a valid phone number",
          }),
        role: z.string().min(1, "Role is required"),
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

// Define the login schema with Zod
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Please enter your email or username")
        .refine(
            (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[a-zA-Z0-9_]+$/.test(value),
            {
                message: "Please enter a valid email address or username",
            }
        ),
    password: z.string().min(1, "Password is required"),
})

export const fleetFormSchema = z.object({
    fleetName: z.string().min(2, { message: "Fleet name must be at least 2 characters" }),
    fleetBaseLocation: z.string().min(2, { message: "Base location is required" }),
    operationalStatus: z.enum(["FULLY_OPERATIONAL", "PARTIALLY_OPERATIONAL", "NON_OPERATIONAL"], {
        required_error: "Please select an operational status",
    }),
})

export const shipmentFormSchema = z.object({
    shipmentName: z.string().min(2, { message: "Fleet name must be at least 2 characters" }),
    shipmentBaseLocation: z.string().min(2, { message: "Base location is required" }),
    operationalStatus: z.enum(["FULLY_OPERATIONAL", "PARTIALLY_OPERATIONAL", "NON_OPERATIONAL"], {
        required_error: "Please select an operational status",
    }),
})