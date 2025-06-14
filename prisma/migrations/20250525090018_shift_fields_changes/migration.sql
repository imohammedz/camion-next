-- CreateEnum
CREATE TYPE "ShiftStatus" AS ENUM ('ACTIVE', 'DEACTIVE');

-- CreateEnum
CREATE TYPE "ShiftType" AS ENUM ('MONTHLY', 'WEEKLY', 'TRIP_BASED', 'KM');

-- CreateEnum
CREATE TYPE "OperationalStatus" AS ENUM ('FULLY_OPERATIONAL', 'PARTIALLY_OPERATIONAL', 'UNDER_MAINTENANCE');

-- CreateEnum
CREATE TYPE "DriverStatus" AS ENUM ('ASSIGNED', 'AVAILABLE', 'ON_LEAVE');

-- CreateEnum
CREATE TYPE "TruckStatus" AS ENUM ('AVAILABLE', 'UNDER_MAINTENANCE', 'OUT_OF_SERVICE', 'IN_TRANSIT', 'LOADING', 'UNLOADING', 'WAITING_FOR_ASSIGNMENT', 'IDLE', 'ON_SALE');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fleetId" TEXT,
    "shipmentId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fleet" (
    "id" TEXT NOT NULL,
    "fleetName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fleetBaseLocation" TEXT NOT NULL,
    "operationalStatus" "OperationalStatus" NOT NULL DEFAULT 'FULLY_OPERATIONAL',

    CONSTRAINT "Fleet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" TEXT NOT NULL,
    "shipmentName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shipmentBaseLocation" TEXT NOT NULL,
    "operationalStatus" "OperationalStatus" NOT NULL DEFAULT 'FULLY_OPERATIONAL',

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

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
    "shiftId" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" TEXT NOT NULL,
    "type" "ShiftType" NOT NULL,
    "shiftSalary" DOUBLE PRECISION NOT NULL,
    "shiftStatus" "ShiftStatus" NOT NULL,
    "fleetId" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DriverShifts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DriverShifts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Truck_registrationNumber_key" ON "Truck"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_registerId_key" ON "Driver"("registerId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_license_key" ON "Driver"("license");

-- CreateIndex
CREATE INDEX "_DriverShifts_B_index" ON "_DriverShifts"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverShifts" ADD CONSTRAINT "_DriverShifts_A_fkey" FOREIGN KEY ("A") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverShifts" ADD CONSTRAINT "_DriverShifts_B_fkey" FOREIGN KEY ("B") REFERENCES "Shift"("id") ON DELETE CASCADE ON UPDATE CASCADE;
