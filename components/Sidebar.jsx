"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  // Mock profile data — replace with your actual user data
  const user = {
    name: "Malhar Prasad Ray",
    username: "@malhar",
    bio: "MCA Student | Web Developer | Tech Enthusiast",
    profilePic: "/cv.jpg", // replace with your profile image URL
    location: "Odisha, India",
    website: "https://yourportfolio.com",
  };
  const router = useRouter();

  return (
    <div className="hidden lg:block w-1/4 p-4">
      <aside className="bg-white shadow p-4 sticky top-20 ">
        {/* Profile Picture, Name, and Username as Link */}
        <Link href={`/profile/${user.username.replace("@", "")}`}>
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />
            <h2 className="mt-3 text-xl text-black font-bold">{user.name}</h2>
            <p className="text-black">{user.username}</p>
          </div>
        </Link>

        {/* Bio */}
        <p className="mt-3 text-center text-black text-sm">{user.bio}</p>

        {/* Extra Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p>📍 {user.location}</p>
          <p>
            🔗{" "}
            <a
              href={user.website}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {user.website.replace("https://", "")}
            </a>
          </p>
        </div>

<<<<<<< HEAD
      {/* Actions */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm">
          Edit Profile
        </button>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm">
          Logout
        </button>
      </div> 
    </aside>
=======
        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <Link
            href="/editprofile"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm text-center flex items-center justify-center"
          >
            Edit Profile
          </Link>

          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm">
            Logout
          </button>
        </div>
      </aside>
>>>>>>> 962e515ef03f8436f4e43319ac39ee620c49ba1e
    </div>
  );
}
