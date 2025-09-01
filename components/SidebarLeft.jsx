"use client";
import { useRouter } from "next/navigation"; // FIXED import

export default function SidebarLeft() {
  const router = useRouter(); // Initialize router

  return (
    <aside className="bg-white rounded-lg shadow p-4 w-full">
      {/* Navigation Links */}
      <nav className="space-y-3">

        {/* Home link with navigation */}
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>🏠</span>
          <span>Home</span>
        </div>

        {/* My Network link with navigation */}
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>👥</span>
                    <button
            className="bg-transparent p-0 m-0 text-gray-700 hover:text-indigo-600 cursor-pointer focus:outline-none"
            onClick={() => router.push("/networks")}
            type="button"
          >
            My Network
          </button>
        </div>

        {/* jobs link with navigation */}
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
          <span>💼</span>
          <button
            className="bg-transparent p-0 m-0 text-gray-700 hover:text-indigo-600 cursor-pointer focus:outline-none"
            onClick={() => router.push("/jobs")}
            type="button"
          >
            Jobs
          </button>
        </div>

        {/* messaging link with navigation */}
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>💬</span>
          <button
            className="bg-transparent p-0 m-0 text-gray-700 hover:text-indigo-600 cursor-pointer focus:outline-none"
            onClick={() => router.push("/messages")}
            type="button"
          >
            Messaging
          </button>
        </div>

        {/* notifications link with navigation */}
        <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
          <span>🔔</span>
          <button
            className="bg-transparent p-0 m-0 text-gray-700 hover:text-indigo-600 cursor-pointer focus:outline-none"
            onClick={() => router.push("/notification")}
            type="button"
          >
            Notifications
          </button>
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
