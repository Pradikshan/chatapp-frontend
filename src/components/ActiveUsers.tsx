import React from "react";

const ActiveUsers = () => {
  const users = ["John", "Jack", "Jane"];
  return (
    <div className="active-users-container">
      {users.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default ActiveUsers;
