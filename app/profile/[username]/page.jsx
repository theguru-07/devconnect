"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const params = useParams(); // Extract username from URL
  const { username } = params;

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Dummy fetch – replace with real API call later
    const dummyUsers = {
      malhar: {
        name: "Malhar Prasad Ray",
        bio: "Full Stack Developer",
        title: "Software Engineer",
        location: "Bhubaneswar, India",
        profilePic: "/devconnect.png",
      }
    };

    setUser(dummyUsers[username] || null);
  }, [username]);

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">User not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.title}</p>
          <p className="text-gray-400 text-sm">{user.location}</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Bio</h2>
        <p className="text-gray-700">{user.bio}</p>
      </div>

      {/* You can add more sections: connections, projects, posts, etc. */}
    </div>
  );
}
