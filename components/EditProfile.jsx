"use client";

export default function EditProfile() {
  // Mock profile data — replace with your actual user data
  const user = {
    name: "Malhar Prasad Ray",
    username: "@malhar",
    bio: "MCA Student | Web Developer | Tech Enthusiast",
    profilePic: "/cv.jpg", // replace with your profile image URL
    location: "Odisha, India",
    website: "https://yourportfolio.com",
  };
    return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Edit Profile</h1>
      <form className="space-y-4">  
        <div>
          <label className="block text-sm font-medium text-black mb-1">Profile Picture</label>
          <input type="file" className="w-full border border-gray-300 rounded-lg p-2" />
            <img
                src={user.profilePic}   
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mt-2"
            />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Name</label>
            <input type="text" defaultValue={user.name} className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Username</label>
            <input type="text" defaultValue={user.username} className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Bio</label>
            <textarea defaultValue={user.bio} className="w-full border border-gray-300 rounded-lg p-2" rows="3"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Location</label>
            <input type="text" defaultValue={user.location} className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Website</label>

            <input type="text" defaultValue={user.website} className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Save Changes
            </button>
        </div>
      </form>
    </div>
  );
}