"use client"

import type React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const IntroPage: React.FC = () => {
  return (
    <div className="container px-4 py-10 md:py-16">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Fleet Management System</h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">Manage your fleet efficiently and effectively</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Manage Fleets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create and manage multiple fleets with ease. Track performance and maintenance.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/fleet-management">Fleet Management</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create and track orders for your fleet. Assign trucks and monitor delivery status.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/create-order">Create Order</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advertisements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create and manage advertisements for your fleet. Reach potential customers.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/create-advertisement">Create Advertisement</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <p className="mb-4">New to our platform? Create an account to get started.</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IntroPage

