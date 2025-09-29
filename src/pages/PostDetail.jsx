import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const baseUrl = "https://webdev-backends.onrender.com";

const PostDetail = () => {
  const { id } = useParams(); // get post id from route
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${baseUrl}/school/posts/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error fetching post");
        setPost(data);
      } catch (e) {
        setError("Could not load post");
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!post) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {post.imageUrl && (
          <div className="mb-6">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full max-h-[400px] object-contain rounded-md"
            />
          </div>
        )}
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.createdAt).toLocaleDateString()} · {post.type}
        </p>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
        <div className="mt-6">
          <Link
            to="/latest"
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back to Latest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
