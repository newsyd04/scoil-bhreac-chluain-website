import React, { useState } from "react";
import { useEffect } from "react";

const Latest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // State for the active filter, defaulting to "All"
  const [activeFilter, setActiveFilter] = useState("All");

  // Dummy data for posts
  const posts = [
    {
      id: 1,
      title: "Last Man Standing Event Update",
      date: "2025-03-17",
      type: "Last Man Standing",
      content:
        "Join us for the annual Last Man Standing event! Get all the details on time, venue, and participation requirements.",
    },
    {
      id: 2,
      title: "2025 School Calendar Released",
      date: "2025-03-15",
      type: "School Calendar",
      content:
        "Our updated school calendar for 2025 is now available. Check important dates, term breaks, and exam schedules.",
    },
    {
      id: 3,
      title: "New Cafeteria Menu",
      date: "2025-03-10",
      type: "Announcement",
      content:
        "The cafeteria has updated its menu to include healthier options for our students. Please review the new choices and dietary options.",
    },
    // Add more posts as required
  ];

  // Derive the list of unique post types (include "All" for the default view)
  const postTypes = ["All", ...new Set(posts.map((post) => post.type))];

  // Filter posts based on the selected filter
  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.type === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Latest Announcements & Posts
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with our newest news, events, and announcements.
          </p>
        </header>

        {/* Filter Section */}
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

        {/* Posts List */}
        <section>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="mb-6 p-6 bg-white rounded-lg shadow-md border"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-700">{post.content}</p>
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
