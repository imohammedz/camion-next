"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SignupForm from "@/components/signup-form"
import { signupSchema } from "@/lib/zod-schemas"
import { supabase } from "@/lib/supabase"

type SignupFormData = z.infer<typeof signupSchema>

const SignupPage: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"",
    role: "",
    userName: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [generalError, setGeneralError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log("inside the signin tab ",name)
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

  const handlePhoneChange = (value: string) => {
    console.log("inside the pphone number change ")
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError("")

    try {
      // Validate form data against the schema
      // const response = await fetch(`/api/get-users?email=${encodeURIComponent(formData.email)}`, {
      //   method: 'GET',
      // });
  
      // const data = await response.json();
  
      // if (data.exists) {
      //   console.log('User already exists');
      // } else {
      //   console.log('Email is available');
      // }

      signupSchema.parse(formData)
      console.log("form data : ",formData)

      const { email, password } = formData;
      const userMetadata = {
        firstName: formData.firstName || '',
        lastName: formData.lastName || '',
        email:formData.email || "", 
        phoneNumber: formData.phoneNumber || '',
        role: formData.role || 'USER', // Default role can be 'USER' or something else
        userName: formData.userName || '',
      };

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_FE_URL}/verify`,
          data: userMetadata,
        },
      });

      if (error) {
        throw new Error(error.message);
      }
  
      const user = data?.user; // Get the user from data
      if (user) {
        console.log('Verification email sent to:', email);
        // Optionally, you can log the user data here for further use
        console.log(user);
      }      

      //router.push(`/login`) 
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
    <div className="container flex items-center justify-center min-h-[80vh] px-4 py-10">
      <Card className="w-full max-w-md p-8">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <SignupForm
          title="Sign Up to Get Started"
          description="Sign up to access all features and get started."
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          generalError={generalError}
          handleSubmit={handleSubmit}
          handlePhoneChange={handlePhoneChange}
        />
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href={`/login`} className="text-primary underline-offset-4 hover:underline">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}


export default SignupPage
