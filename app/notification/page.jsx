"use client";

import { useState, useEffect } from "react";
import NotificationCard from "@/components/NotificationCard";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Dummy notifications
    const dummyNotifications = [
      {
        _id: "1",
        type: "request",
        message: "Aarav Sharma sent you a connection request",
        time: "2h ago",
      },
      {
        _id: "2",
        type: "like",
        message: "Priya Singh liked your project",
        time: "5h ago",
      },
      {
        _id: "3",
        type: "comment",
        message: "Rohan Mehta commented on your post",
        time: "1d ago",
      },
      {
        _id: "4",
        type: "request",
        message: "Sita Devi sent you a connection request",
        time: "3d ago",
      },
      {
        _id: "5",
        type: "like",
        message: "Anjali Verma liked your post",
        time: "2d ago",
      }
    ];
    setNotifications(dummyNotifications);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <div className="space-y-2">
          {notifications.map((notif) => (
            <NotificationCard key={notif._id} notif={notif} />
          ))}
        </div>
      )}
    </div>
  );
}
