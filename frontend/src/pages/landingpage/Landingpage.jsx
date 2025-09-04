import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar";
import PostFeed from "../../components/PostFeed";
import RightSidebar from "../../components/RightSidebar";
import PostForm from "../../components/PostForm";
import { AiOutlinePlus } from "react-icons/ai";  // + symbol

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-black min-h-screen flex justify-center text-white">
      <div className="w-full max-w-7xl flex gap-6 mt-4 px-4">
        {/* Left Sidebar */}
        <div className="w-1/4 hidden md:block">
          <LeftSidebar />
        </div>

        {/* Center Feed */}
        <div className="w-full md:w-2/4">
          {/* 👇 Profile + Input Box */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-3 mb-4 flex items-center gap-3">
            {/* Profile Avatar */}
            <img
              src="data:image/jpeg;base64,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" // 👉 replace with user profile
              alt="profile"
              className="w-10 h-10 rounded-full border border-gray-600"
            />

            {/* Fake Input with + button */}
            <div className="flex-1 flex items-center justify-between bg-gray-800 text-gray-400 rounded-lg px-4 py-2">
              <span>Share your thoughts...</span>
              <button
                onClick={() => setShowForm(true)}
                className="text-green-500 hover:text-green-400"
              >
                <AiOutlinePlus size={22} />
              </button>
            </div>
          </div>

          {/* Feed */}
          <PostFeed />
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 hidden md:block">
          <RightSidebar />
        </div>
      </div>

      {/* 🔥 Post Form Modal */}
      {showForm && <PostForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default LandingPage;
