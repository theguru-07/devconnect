"use client";

import { useState, useEffect } from "react";

export default function Networks() {
  const [suggestions, setSuggestions] = useState([]);

  // Load dummy data on mount
  useEffect(() => {
    const dummyData = [
      { _id: "1", name: "Aarav Sharma", title: "Software Engineer" },
      { _id: "2", name: "Priya Singh", title: "Data Analyst" },
      { _id: "3", name: "Rohan Mehta", title: "UI/UX Designer" },
      { _id: "4", name: "Sneha Patel", title: "Backend Developer" },
      { _id: "5", name: "Vikram Rao", title: "Cloud Architect" },
    ];
    setSuggestions(dummyData);
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-3">People you may know</h2>

      {suggestions.length === 0 ? (
        <p className="text-gray-500">No suggestions right now.</p>
      ) : (
        <ul className="space-y-3">
          {suggestions.map((user) => (
            <li
              key={user._id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.title}</p>
              </div>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                Connect
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
