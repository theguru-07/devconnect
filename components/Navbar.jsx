export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">DevConnect</div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search developers, projects..."
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-600"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button>🔔</button>
          <img
            src="/devconnect.png"
            alt="Profile"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </nav>
  );
}
