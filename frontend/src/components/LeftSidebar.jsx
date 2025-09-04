import React from "react";

const groups = [
  { id: 1, name: "React Developers", members: "45K" },
  { id: 2, name: "Machine Learning Hub", members: "32K" },
  { id: 3, name: "Full Stack Engineers", members: "50K" },
];

const LeftSidebar = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-3">Suggested Groups</h2>
      {groups.map((group) => (
        <div
          key={group.id}
          className="flex justify-between items-center bg-gray-800 p-3 rounded-lg mb-2"
        >
          <div>
            <p className="font-medium">{group.name}</p>
            <p className="text-sm text-gray-400">{group.members} members</p>
          </div>
          <button className="bg-[#00A63E] px-3 py-1 rounded-full text-sm hover:opacity-80">
            Join
          </button>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
