import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Download } from "lucide-react";

const baseUrl = "https://webdev-backends.onrender.com";

const getDownloadUrl = (fileUrl) => {
  if (!fileUrl) return "";
  if (!fileUrl.startsWith("http")) return `${baseUrl}/school/uploads/${fileUrl}`;
  // Upgrade insecure stored links from old posts.
  if (fileUrl.startsWith("http://webdev-backends.onrender.com")) {
    return fileUrl.replace("http://", "https://");
  }
  return fileUrl;
};

const PostDetail = () => {
  const { id } = useParams();
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

  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;
  if (!post) return <p className="text-gray-600 text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#F9F8F4] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Image (if available) */}
        {post.imageUrl && (
          <div className="mb-6">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full max-h-[400px] object-contain rounded-md"
            />
          </div>
        )}

        {/* Title + Meta */}
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.createdAt).toLocaleDateString()} · {post.type}
        </p>

        {/* Content */}
        <p className="text-gray-800 leading-relaxed whitespace-pre-line mb-6">
          {post.content}
        </p>

        {/* File download section (only if a file was uploaded) */}
        {post.fileUrl && (
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <Download className="w-5 h-5 text-blue-600" />
            <a
              href={getDownloadUrl(post.fileUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:underline"
            >
              Download Attached File
            </a>
          </div>
        )}

        {/* Back link */}
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
