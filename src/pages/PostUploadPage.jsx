import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Upload, AlertCircle } from "lucide-react";

const PostUploadPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [changeTitle, setChangeTitle] = useState("");
  const [changeContent, setChangeContent] = useState("");
  const [urgency, setUrgency] = useState("Medium");
  const [file, setFile] = useState(null);
  const [changeMessage, setChangeMessage] = useState("");
  const [changeError, setChangeError] = useState("");

  const navigate = useNavigate();
  const baseUrl = "https://webdev-backends.onrender.com";

  // Post Upload
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to post");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/school/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ title, content, type }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Post created successfully ✅");
        setTitle("");
        setContent("");
        setType("");
      } else {
        setError(data.message || "Failed to create post");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while creating the post");
    }
  };

  // Change Request
  const handleChangeSubmit = async (e) => {
    e.preventDefault();
    setChangeError("");
    setChangeMessage("");
    const token = localStorage.getItem("token");
    if (!token) {
      setChangeError("You must be logged in to submit a change request");
      return;
    }

    const formData = new FormData();
    formData.append("title", changeTitle);
    formData.append("content", changeContent);
    formData.append("urgency", urgency);
    if (file) formData.append("file", file);

    try {
      const response = await fetch(`${baseUrl}/school/change-requests`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setChangeMessage("Change request submitted successfully ✅");
        setChangeTitle("");
        setChangeContent("");
        setUrgency("Medium");
        setFile(null);
      } else {
        setChangeError(data.message || "Failed to submit change request");
      }
    } catch (err) {
      console.error(err);
      setChangeError("An error occurred while submitting the change request");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Post Upload Form */}
        <form
          onSubmit={handlePostSubmit}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {message && <div className="mb-4 text-green-600">{message}</div>}

          <div className="mb-4">
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Announcement, Event, etc."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Post
          </button>
        </form>

        {/* Change Request Form */}
        <form
          onSubmit={handleChangeSubmit}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <div className="flex items-center mb-6 gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Submit a Change Request
            </h2>
          </div>

          {changeError && (
            <div className="mb-4 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>{changeError}</span>
            </div>
          )}
          {changeMessage && (
            <div className="mb-4 text-green-600 bg-green-50 p-3 rounded-lg">
              {changeMessage}
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              value={changeTitle}
              onChange={(e) => setChangeTitle(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Change Details</label>
            <textarea
              value={changeContent}
              onChange={(e) => setChangeContent(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Urgency</label>
            <div className="flex gap-3">
              {["Low", "Medium", "High"].map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setUrgency(level)}
                  className={`flex-1 px-4 py-2 rounded-lg border font-medium transition ${
                    urgency === level
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Attach a File</label>
            <label className="flex items-center justify-center w-full px-4 py-6 bg-gray-50 text-gray-600 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition">
              <Upload className="w-5 h-5 mr-2 text-blue-600" />
              <span>{file ? file.name : "Click to upload or drag & drop"}</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Change Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostUploadPage;
