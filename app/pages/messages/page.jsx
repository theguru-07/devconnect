"use client";

import Messages from "@/components/Messages";

export default function MessagesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">My Messages</h1>

      {/* Messages List */}
      <Messages />
    </div>
  );
}
