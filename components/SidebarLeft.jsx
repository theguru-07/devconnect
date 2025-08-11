export default function SidebarLeft() {
  return (
    <aside className="bg-white rounded-lg shadow p-4 w-full">
      {/* Navigation Links */}
      <nav className="space-y-3">
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>🏠</span>
          <span>Home</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>👥</span>
          <span>My Network</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>💼</span>
          <span>Jobs</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>💬</span>
          <span>Messaging</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>🔔</span>
          <span>Notifications</span>
        </div>
      </nav>

      {/* Groups & Events */}
      <div className="mt-6 border-t pt-3">
        <h3 className="text-sm font-semibold text-gray-600">Groups</h3>
        <ul className="text-sm mt-2 space-y-1">
          <li className="hover:underline cursor-pointer text-indigo-600">DevConnect Community</li>
          <li className="hover:underline cursor-pointer text-indigo-600">MERN Stack Learners</li>
        </ul>
      </div>

      <div className="mt-4 border-t pt-3">
        <h3 className="text-sm font-semibold text-gray-600">Events</h3>
        <ul className="text-sm mt-2 space-y-1">
          <li className="hover:underline cursor-pointer text-indigo-600">Hackathon 2025</li>
          <li className="hover:underline cursor-pointer text-indigo-600">AI Meetup</li>
        </ul>
      </div>
    </aside>
  );
}
