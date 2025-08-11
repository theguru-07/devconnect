"use client";

import { useState } from "react";

export default function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !image) return;

    // Temporary: We'll send post data to parent component
    const newPost = {
      id: Date.now(),
      content,
      image: image ? URL.createObjectURL(image) : null,
      author: "You", // later replace with logged-in user
      date: new Date().toLocaleString(),
    };

    onPostCreated(newPost);
    setContent("");
    setImage(null);
  };

  return (
    <div className="bg-white p-4 rounded-xl text-black shadow mb-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border rounded-lg p-2 resize-none"
          rows="3"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center justify-between mt-2">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
