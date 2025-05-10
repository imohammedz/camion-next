/*
  Warnings:

  - You are about to drop the column `fleetDetails` on the `Fleet` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Fleet` table. All the data in the column will be lost.
  - You are about to drop the column `locationName` on the `Fleet` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Fleet` table. All the data in the column will be lost.
  - Added the required column `fleetBaseLocation` to the `Fleet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OperationalStatus" AS ENUM ('FULLY_OPERATIONAL', 'PARTIALLY_OPERATIONAL', 'UNDER_MAINTENANCE');

-- CreateEnum
CREATE TYPE "DriverStatus" AS ENUM ('ASSIGNED', 'AVAILABLE', 'ON_LEAVE');

-- CreateEnum
CREATE TYPE "TruckStatus" AS ENUM ('AVAILABLE', 'UNDER_MAINTENANCE', 'OUT_OF_SERVICE', 'IN_TRANSIT', 'LOADING', 'UNLOADING', 'WAITING_FOR_ASSIGNMENT', 'IDLE', 'ON_SALE');

-- AlterTable
ALTER TABLE "Fleet" DROP COLUMN "fleetDetails",
DROP COLUMN "latitude",
DROP COLUMN "locationName",
DROP COLUMN "longitude",
ADD COLUMN     "fleetBaseLocation" TEXT NOT NULL,
ADD COLUMN     "operationalStatus" "OperationalStatus" NOT NULL DEFAULT 'FULLY_OPERATIONAL';

-- CreateTable
CREATE TABLE "Truck" (
    "id" TEXT NOT NULL,
    "truckModel" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "yearOfManufacture" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "dimensions" TEXT,
    "fuelType" TEXT NOT NULL,
    "mileage" TEXT,
    "status" "TruckStatus" NOT NULL DEFAULT 'AVAILABLE',
    "fleetId" TEXT NOT NULL,
    "driverId" TEXT,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registerId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "status" "DriverStatus" NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fleetId" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Truck_registrationNumber_key" ON "Truck"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_registerId_key" ON "Driver"("registerId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_license_key" ON "Driver"("license");

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
