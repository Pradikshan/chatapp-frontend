import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <div className="p-5 border-2 border-slate-500 rounded-2xl shadow-xl">
        <p className="text-center font-bold text-xl">Enter your credentials</p>

        <UserForm buttonText={"Login"} buttonFunc={handleLogin} />

        <a href="/signup" className="signup-link">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
