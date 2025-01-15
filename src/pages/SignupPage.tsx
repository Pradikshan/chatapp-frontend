import React, { useEffect, useState } from "react";
import { UserFormData } from "../utils/type";
// import UserForm from "../components/UserForm";

const SignupPage = () => {
  const [userData, setUserData] = useState<UserFormData>({
    name: "",
    password: "",
  });

  useEffect(() => {
    if (userData.name && userData.password) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setUserData({
      name: "",
      password: "",
    });
    alert("User credentials added successfuly! Navigate to login page");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <div className="p-5 border-2 border-slate-500 rounded-2xl shadow-xl">
        <p className="text-center font-bold text-xl">Enter your credentials</p>
        <form className="mt-6" onSubmit={handleSignUp}>
          <div className="my-3">
            <label htmlFor="name" className="font-bold text-lg">
              User Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-black rounded-xl mx-2"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          <div className="my-3">
            <label htmlFor="password" className="font-bold text-lg">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 border-black rounded-xl mx-2"
              value={userData.password}
              onChange={handleChange}
            />
          </div>

          <button id="form-btn" className="form-btn" type="submit">
            Sign up
          </button>
        </form>

        <a href="/" className="form-link">
          Already have an account? Login
        </a>
      </div>
    </div>
  );
};

export default SignupPage;
