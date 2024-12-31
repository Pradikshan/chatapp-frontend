import React, { useState } from "react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {};

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
      {isOpen ? (
        <button className="logout-btn" onClick={handleLogout}>
          <img src="../images/icons/logout.png" alt="logout-icon" />
          <p className="ms-2">Logout</p>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProfile;
