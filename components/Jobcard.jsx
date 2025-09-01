"use client";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl text-blue-900 font-semibold">{job.title}</h2>
        <span className="text-sm text-blue-900">{job.type}</span>
      </div>

      <p className="text-gray-600 mb-4">{job.company}</p>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
        <MapPin size={16} />
        <span>{job.location}</span>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
        <Calendar size={16} />
        <span>Posted: {job.postedDate}</span>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <Briefcase size={16} />
        <span>Experience: {job.experience}</span>
      </div>

      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Apply Now
        </button>
        <button className="px-4 py-2 border text-blue-900 border-gray-300 rounded-xl hover:bg-green-500">
          Save
        </button>
      </div>
    </div>
  );
}
