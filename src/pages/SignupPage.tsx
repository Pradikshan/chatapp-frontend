import React from "react";
import UserForm from "../components/UserForm";

const SignupPage = () => {
  const handleSignUp = () => {};
  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <div className="p-5 border-2 border-slate-500 rounded-2xl shadow-xl">
        <p className="text-center font-bold text-xl">Enter your credentials</p>

        <UserForm buttonText={"Signup"} buttonFunc={handleSignUp} />

        <a href="/login" className="form-link">
          Already have an account? Log in
        </a>
      </div>
    </div>
  );
};

export default SignupPage;
