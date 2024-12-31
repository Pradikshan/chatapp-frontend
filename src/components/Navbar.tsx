import React from "react";
import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex justify-end">
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
