import React from "react";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    user: "Sujatha",
    avatar: "https://i.pravatar.cc/50?img=1",
    content: "Exploring React components today 🚀",
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    user: "Ravi",
    avatar: "https://i.pravatar.cc/50?img=2",
    content: "Full stack development is awesome! 💻",
    likes: 20,
    comments: 8,
  },
];

const PostFeed = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
