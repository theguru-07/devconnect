"use client";

import { useState } from "react";
import CreatePost from "./CreatePost";
import Postcard from "./Postcard";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost onPostCreated={handleNewPost} />
      {posts.length > 0 ? (
        posts.map((post) => <Postcard key={post.id} post={post} />)
      ) : (
        <p className="text-gray-500 text-center mt-4">No posts yet</p>
      )}
    </div>
  );
}
