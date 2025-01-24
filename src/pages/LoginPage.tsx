import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserFormData } from "../utils/type";
import useAppStore from "../store/store";
import LoginModal from "../components/LoginModal";

const LoginPage = () => {
  const socket = useAppStore((state) => state.socket);

  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({ username: "" });
  const setUsername = useAppStore((state) => state.setUsername);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log(`${formData.username}`);
    } catch (error) {
      console.log(`Error in handle change: ${error}`);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setUsername(formData.username);
      socket?.emit("newUser", {
        username: formData.username,
        socketId: socket.id,
      });
      navigate("/home");
    } catch (error) {
      console.log(`Error in login: ${error}`);
    }
  };

  return (
    <>
      <LoginModal />
      <div className="min-h-screen h-screen flex justify-center items-center">
        <div className="p-5 border-2 border-slate-500 rounded-2xl shadow-xl">
          <p className="text-center font-bold text-xl">
            Enter your credentials
          </p>
          <form className="mt-6" onSubmit={handleLogin}>
            <div className="my-3">
              <label htmlFor="username" className="font-bold text-lg">
                User Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border-2 border-black rounded-xl mx-2 p-2"
                onChange={handleChange}
              />
            </div>

            <button id="form-btn" className="form-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <p className="font-bold text-center">
        Note: If the app does not work as expected then this is due to the
        backend service not functioning because the instance has shutdown.
      </p>
    </>
  );
};

export default LoginPage;
