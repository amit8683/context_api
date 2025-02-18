import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const ShowUser = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
      <h2 className="text-white text-2xl font-semibold mb-4">User List</h2>
      {user.length === 0 ? (
        <p className="text-gray-400">No users added yet.</p>
      ) : (
        <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl shadow-lg">
          {user.map((u, index) => (
            <div
              key={index}
              className="bg-gray-700 p-3 my-2 rounded-lg text-white flex justify-between"
            >
              <span className="font-semibold">{u.name}</span>
              <span className="text-gray-400">({u.password})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowUser;
