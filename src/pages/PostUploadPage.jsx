import React, { useState } from "react";
import { FileText, AlertCircle } from "lucide-react";
import lmsImg from "/lms.png";
import eventImg from "/event.jpg";
import announcementImg from "/announcement.jpg";

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

  const stockImages = [lmsImg, eventImg, announcementImg];
  const [selectedImage, setSelectedImage] = useState("");

  const baseUrl = "https://webdev-backends.onrender.com";

  // Create Post
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
        body: JSON.stringify({
          title,
          content,
          type,
          imageUrl: selectedImage || null,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Post created successfully ✅");
        setTitle("");
        setContent("");
        setType("");
        setSelectedImage("");
      } else {
        setError(data.message || "Failed to create post");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while creating the post");
    }
  };

  // Submit Change Request (with free file upload)
  const handleChangeSubmit = async (e) => {
    e.preventDefault();
    setChangeError("");
    setChangeMessage("");

    const formData = new FormData();
    formData.append("title", changeTitle);
    formData.append("change_details", changeContent);
    formData.append("urgency", urgency);
    if (file) formData.append("file", file);

    try {
      const response = await fetch(`${baseUrl}/school/change-request`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setChangeMessage("Change request sent successfully ✅");
        setChangeTitle("");
        setChangeContent("");
        setUrgency("Medium");
        setFile(null);
      } else {
        setChangeError(data.message || "Failed to send change request ❌");
      }
    } catch (err) {
      console.error("Error:", err);
      setChangeError("An error occurred while sending the change request ❌");
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

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            rows="4"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Type (e.g. Event, Announcement)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6"
            required
          />

          <div className="flex gap-3 overflow-x-auto mb-6">
            {stockImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="stock"
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-16 object-cover cursor-pointer border-4 rounded ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            ))}
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
            <div className="mb-4 text-red-600 bg-red-50 p-3 rounded-lg">
              {changeError}
            </div>
          )}
          {changeMessage && (
            <div className="mb-4 text-green-600 bg-green-50 p-3 rounded-lg">
              {changeMessage}
            </div>
          )}

          <input
            type="text"
            placeholder="Title"
            value={changeTitle}
            onChange={(e) => setChangeTitle(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <textarea
            placeholder="Change Details"
            value={changeContent}
            onChange={(e) => setChangeContent(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            rows="4"
            required
          ></textarea>

          <div className="flex gap-3 mb-4">
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

          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-gray-600 mb-6"
          />

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
