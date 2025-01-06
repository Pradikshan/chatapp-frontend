import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <div className="p-5 border-2 border-slate-500 rounded-2xl shadow-xl">
        <p className="text-center font-bold text-xl">Enter your credentials</p>
        <form className="mt-6">
          <div className="my-3">
            <label htmlFor="user-name" className="font-bold text-lg">
              User Name:
            </label>
            <input
              type="text"
              id="user-name"
              className="border-2 border-black rounded-xl mx-2"
            />
          </div>

          <div className="my-3">
            <label htmlFor="password" className="font-bold text-lg">
              Password:
            </label>
            <input
              type="text"
              id="password"
              className="border-2 border-black rounded-xl mx-2"
            />
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </form>

        <a href="/signup" className="signup-link">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
