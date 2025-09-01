"use client";

import { useState } from "react";

// Dummy Suggestions
const dummySuggestions = [
  { _id: "1", name: "Aarav Sharma", title: "Software Engineer" },
  { _id: "2", name: "Priya Singh", title: "Data Analyst" },
  { _id: "3", name: "Rohan Mehta", title: "UI/UX Designer" },
];

// Dummy Connections
const dummyConnections = [
  { _id: "101", name: "Ananya Gupta", title: "Frontend Developer" },
  { _id: "102", name: "Karan Malhotra", title: "ML Engineer" },
];

export default function NetworksPage() {
  const [suggestions, setSuggestions] = useState(dummySuggestions);
  const [connections, setConnections] = useState(dummyConnections);

  // Handle connect
  const handleConnect = (user) => {
    setConnections([...connections, user]);
    setSuggestions(suggestions.filter((s) => s._id !== user._id));
  };

  // Handle remove connection
  const handleRemove = (id) => {
    setConnections(connections.filter((c) => c._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">My Network</h1>

      {/* Suggestions Section */}
      <div className="p-4 border rounded-lg shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-3 text-black">People you may know</h2>
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
                  <p className="font-medium text-black">{user.name}</p>
                  <p className="text-sm text-blue-500">{user.title}</p>
                </div>
                <button
                  onClick={() => handleConnect(user)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
                >
                  Connect
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* My Connections Section */}
      <div className="p-4 border rounded-lg shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-3 text-black">My Connections</h2>
        {connections.length === 0 ? (
          <p className="text-gray-500">You don’t have any connections yet.</p>
        ) : (
          <ul className="space-y-3">
            {connections.map((user) => (
              <li
                key={user._id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-medium text-black">{user.name}</p>
                  <p className="text-sm text-blue-500">{user.title}</p>
                </div>
                <button
                  onClick={() => handleRemove(user._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
