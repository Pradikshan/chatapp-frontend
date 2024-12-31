import React, { useState } from "react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="userprofile-container" onClick={onClick}>
      <div className="flex items-center">
        <p>User name</p>
        <img
          src="../images/icons/dropdown.png"
          alt="dropdown-icon"
          className={`ms-2 ${
            isOpen
              ? "userprofile-container-img-active"
              : "userprofile-container-img"
          }`}
        />
      </div>
      <button className="logout-btn">
        <img src="../images/icons/logout.png" alt="logout-icon" />
        <p className="ms-2">Logout</p>
      </button>
      {/* <div className="flex items-center mt-4 border-t-2 border-slate-400">
        <img
          src="../images/icons/logout.png"
          alt="logout-icon"
          className="mt-3"
        />
      </div> */}
    </div>
  );
};

export default UserProfile;
