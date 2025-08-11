export default function Postcard({ post }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-black">{post.author}</span>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <p className="text-black">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="mt-2 rounded-lg max-h-80 object-cover"
        />
      )}
    </div>
  );
}
