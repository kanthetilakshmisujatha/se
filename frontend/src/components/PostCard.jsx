import React from "react";
import { Heart, MessageCircle } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow-md">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.avatar}
          alt={post.user}
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-semibold">{post.user}</h3>
      </div>

      {/* Content */}
      <p className="mb-3 text-gray-200">{post.content}</p>

      {/* Actions */}
      <div className="flex gap-6 text-gray-400">
        <button className="flex items-center gap-1 hover:text-red-500">
          <Heart size={18} /> {post.likes}
        </button>
        <button className="flex items-center gap-1 hover:text-blue-400">
          <MessageCircle size={18} /> {post.comments}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
