"use client";

export default function SidebarRight() {
  const suggestions = [
    { name: "Sarah Lee", title: "UI/UX Designer" },
    { name: "Michael Smith", title: "Backend Developer" },
    { name: "Priya Patel", title: "Data Scientist" },
  ];

  const trends = [
    "#WebDevelopment",
    "#AI",
    "#ReactJS",
    "#OpenSource",
    "#NextJS",
  ];

  return (
    <aside className="w-64 bg-white rounded-lg shadow p-4 space-y-6">
      {/* Who to Follow */}
      <div>
        <h3 className="font-semibold mb-3 text-black">Who to follow</h3>
        {suggestions.map((person, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div>
              <p className="text-sm font-medium text-black">{person.name}</p>
              <p className="text-xs text-gray-500">{person.title}</p>
            </div>
            <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Trending */}
      <div>
        <h3 className="font-semibold mb-3">Trending Topics</h3>
        <ul className="space-y-1 text-sm text-blue-600">
          {trends.map((topic, i) => (
            <li key={i} className="hover:underline cursor-pointer">{topic}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
