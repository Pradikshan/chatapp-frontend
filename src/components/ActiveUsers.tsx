import React, { useEffect, useState } from "react";
import useAppStore from "../store/store";
import { IUser } from "../utils/interface";

const ActiveUsers = () => {
  const socket = useAppStore((state) => state.socket);

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (socket) {
      socket.on("newUserResponse", (data) => {
        console.log(`User data from server: ${JSON.stringify(data)}`);
        setUsers(data);
      });
    }

    return () => {
      socket?.off("newUserResponse");
    };
  }, [socket]);

  // console.log(`Users: ${JSON.stringify(users)}`);

  // const users = ["John", "Jack", "Jane"];
  return (
    <div className="active-users-container">
      <p className="font-bold text-2xl">Active users</p>
      <div className="mt-10">
        {/* {users.map((item) => (
          <p className="text-xl">{item}</p>
        ))} */}
        {users.map(({ username, socketId }) => (
          <p className="text-xl" key={socketId}>
            {username}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsers;
