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
          alt="dropdown"
          className={`${
            isOpen
              ? "userprofile-container-img-active"
              : "userprofile-container-img"
          }`}
        />
      </div>
    </div>
  );
};

export default UserProfile;
