import React from "react";

const people = [
  { id: 1, name: "Kiran", avatar: "https://i.pravatar.cc/50?img=4" },
  { id: 2, name: "Meena", avatar: "https://i.pravatar.cc/50?img=5" },
  { id: 3, name: "Arjun", avatar: "https://i.pravatar.cc/50?img=6" },
];

const RightSidebar = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-3">People you may know</h2>
      {people.map((person) => (
        <div
          key={person.id}
          className="flex justify-between items-center bg-gray-800 p-3 rounded-lg mb-2"
        >
          <div className="flex items-center gap-3">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-10 h-10 rounded-full"
            />
            <p className="font-medium">{person.name}</p>
          </div>
          <button className="bg-[#00A63E] px-3 py-1 rounded-full text-sm hover:opacity-80">
            Connect
          </button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
