"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import FleetHeader from "@/components/fleet/fleet-layout-header";

export default function SecureLayout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false); // Sidebar state
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <FleetHeader />
      </header>

      {/* Push the content below the header */}
      <main className="flex-1 p-4 pt-20">
        {children}
      </main>
    </div>
  );
}
