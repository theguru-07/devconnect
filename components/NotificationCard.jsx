"use client";

export default function NotificationCard({ notif }) {
  let icon;
  switch (notif.type) {
    case "connection":
      icon = "🤝";
      break;
    case "like":
      icon = "❤️";
      break;
    case "comment":
      icon = "💬";
      break;
    default:
      icon = "🔔";
  }
  return (
    <div className="flex items-center p-3 border-b hover:bg-gray-50 cursor-pointer rounded-lg">
      <span className="text-2xl mr-3">{icon}</span>
      <div>
        <p className="text-blue-500">{notif.message}</p>
        <span className="text-xs text-gray-400">{notif.time}</span>
      </div>
    </div>
  );
}