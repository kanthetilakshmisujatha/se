import React, { useState } from "react";
import { X } from "lucide-react";

const PostForm = ({ onClose }) => {
  const [postType, setPostType] = useState("community"); // default community post

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-2xl shadow-lg border border-gray-700">
        {/* Header with close */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-green-400">
            {postType === "community" ? "Create Post" : "Job Posting"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Type Selection */}
        <div className="flex gap-6 mb-6 text-gray-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="postType"
              value="community"
              checked={postType === "community"}
              onChange={(e) => setPostType(e.target.value)}
            />
            Community Post
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="postType"
              value="job"
              checked={postType === "job"}
              onChange={(e) => setPostType(e.target.value)}
            />
            Job Posting
          </label>
        </div>

        {/* COMMUNITY POST FORM */}
        {postType === "community" && (
          <div>
            {/* Profile Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Profile Name</label>
              <input
                type="text"
                placeholder="Enter your profile name..."
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Title</label>
              <input
                type="text"
                placeholder="Excited to share..."
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
            </div>

            {/* Content */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Post Content</label>
              <textarea
                rows="4"
                placeholder="Write something..."
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Upload Image</label>
              <input
                type="file"
                className="mt-1 w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg 
                file:border-0 file:text-sm file:font-semibold 
                file:bg-green-500 file:text-white hover:file:bg-green-600"
              />
            </div>

            {/* Submit */}
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition">
              Create Post
            </button>
          </div>
        )}

        {/* JOB POSTING FORM */}
        {postType === "job" && (
          <div>
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Job Title</label>
              <input
                type="text"
                placeholder="Senior Frontend Engineer"
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Description</label>
              <textarea
                rows="4"
                placeholder="Job Description..."
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              ></textarea>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Skills (comma separated)</label>
              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
            </div>

            {/* Salary + Job Type */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="$120,000 - $150,000"
                className="flex-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
              <select className="flex-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Location</label>
              <input
                type="text"
                placeholder="Remote / Onsite"
                className="w-full p-2 mt-1 border border-gray-600 rounded-lg bg-gray-800 text-white"
              />
            </div>

            {/* Upload Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-400">Upload Image</label>
              <input
                type="file"
                className="mt-1 w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg 
                file:border-0 file:text-sm file:font-semibold 
                file:bg-green-500 file:text-white hover:file:bg-green-600"
              />
            </div>

            {/* Submit */}
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition">
              Post Job
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostForm;
