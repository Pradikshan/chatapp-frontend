import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../store/store";

const UserProfile = () => {
  const username = useAppStore((state) => state.username);
  const setUsername = useAppStore((state) => state.setUsername);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    try {
      setUsername("");
      navigate("/");
    } catch (error) {
      console.log(`Logout error: ${error}`);
    }
  };

  return (
    <div className="userprofile-container" onClick={onClick}>
      <div className="flex items-center">
        <p>{username}</p>
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
