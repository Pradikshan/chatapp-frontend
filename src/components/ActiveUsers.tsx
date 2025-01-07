import React from "react";

const ActiveUsers = () => {
  const users = ["John", "Jack", "Jane"];
  return (
    <div className="active-users-container">
      <p className="font-bold text-2xl">Active users</p>
      <div className="mt-10">
        {users.map((item) => (
          <p className="text-xl">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsers;
