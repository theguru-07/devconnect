'use client';

import Navbar from '@/components/Navbar';
import SidebarLeft from '@/components/SidebarLeft';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import SidebarRight from '@/components/SidebarRight';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">Welcome to DevConnect</h1>
      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto mt-4 px-4 gap-4">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-1/4">
          <SidebarLeft />
        </div>

        {/* Feed */}
        <div className="flex-1">
          <Feed />
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-1/4">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}
