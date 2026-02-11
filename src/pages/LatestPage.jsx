import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Latest = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  // Use environment variable or fallback to the deployed API URL
  const baseUrl = "https://webdev-backends.onrender.com";

  const fetchPosts = async () => {
    try {
      let url = `${baseUrl}/school/posts`;
      if (activeFilter !== "All") {
        url += `?type=${encodeURIComponent(activeFilter)}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setPosts(data);
      } else {
        setError(data.message || "Error fetching posts");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [activeFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postTypes = ["All", ...new Set(posts.map((post) => post.type))];

  // helper to shorten text
  const getExcerpt = (text, maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.slice(0, maxLength).trim() + "..."
      : text;
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#1C2E5A] mb-4">
            Latest Announcements & Posts
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with our newest news, events, and announcements.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Filter by Type:
          </h2>
          <div className="flex flex-wrap gap-4">
            {postTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-full border transition ${
                  activeFilter === type
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        <section>
          {error && <p className="text-red-500">{error}</p>}
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="mb-6 p-6 bg-white rounded-lg shadow-md border"
              >
                <div className="mb-4 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={post.imageUrl || "/fallback.jpg"}
                    alt={post.title}
                    className="w-full h-60 object-scale-down"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    <Link to={`/post/${post._id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <span className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {/* Excerpt instead of full content */}
                <p className="text-gray-700">{getExcerpt(post.content, 160)}</p>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">{post.type}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No posts available for the selected filter.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Latest;
