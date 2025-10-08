"use client";

import { useState, useEffect } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dummyMessages = [
      {
        _id: "1",
        name: "Aarav Sharma",
        lastMessage: "Hey! How’s your project going?",
        time: "2h ago",
      },
      {
        _id: "2",
        name: "Priya Singh",
        lastMessage: "Can you review my PR?",
        time: "5h ago",
      },
      {
        _id: "3",
        name: "Rohan Mehta",
        lastMessage: "Let’s catch up tomorrow.",
        time: "1d ago",
      },
      {
        _id: "4",
        name: "Ananya Gupta",
        lastMessage: "Looking forward to our meeting.",
        time: "2d ago",
      },
      {
        _id: "5",
        name: "Karan Malhotra",
        lastMessage: "Can we reschedule our call?",
        time: "3d ago",
      },
      {
        _id: "6",
        name: "Saanvi Verma",
        lastMessage: "Are we still on for the call?",
        time: "4d ago",
      },
    ];
    setMessages(dummyMessages);
  }, []);

  return (
    <div className="border shadow-sm bg-white">
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <ul className="space-y-3">
          {messages.map((msg) => (
            <li
              key={msg._id}
              className="flex justify-between items-center p-2 border-b hover:bg-blue-50 rounded-lg cursor-pointer"
            >
              <div>
                <p className="font-medium text-black">{msg.name}</p>
                <p className="text-sm text-gray-500">{msg.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
