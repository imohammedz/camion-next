

export default function FleetHeader() {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="w-full border-b bg-white">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="text-red-600 font-bold text-xl">Camion</div>
          <div className="flex items-center gap-4">
            <div className="border rounded px-3 py-1 text-sm">FLEET OWNER</div>
            <div>Welcome, balaji</div>
            <div className="border rounded px-3 py-1 text-sm">LOGOUT</div>
            <button className="p-1 rounded-full">
              <span className="sr-only">Toggle theme</span>
              <Moon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

function Moon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
