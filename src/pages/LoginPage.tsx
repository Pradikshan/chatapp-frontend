import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserFormData } from "../utils/type";
import useAppStore from "../store/store";

const LoginPage = () => {
  // const [storedUserData, setStoredUserData] = useState<UserFormData>({
  //   name: "",
  //   password: "",
  // });

  // const [currentFormData, setCurrentFormData] = useState<UserFormData>({
  //   name: "",
  //   password: "",
  // });

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setCurrentFormData({
  //     ...currentFormData,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  // useEffect(() => {
  //   const storedData = localStorage.getItem("userData");

  //   if (storedData) {
  //     const userData: UserFormData = JSON.parse(storedData);
  //     setStoredUserData(userData);
  //   }
  // }, []);

  // const navigate = useNavigate();

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (
  //     currentFormData.name == storedUserData.name &&
  //     currentFormData.password == storedUserData.password
  //   ) {
  //     navigate("/home");
  //   } else {
  //     alert("Invalid credentails");
  //   }
  // };

  const navigate = useNavigate();
  const [formData, setFormData] = useState<IUserFormData>({ username: "" });
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
      navigate("/home");
    } catch (error) {
      console.log(`Error in login: ${error}`);
    }
  };

  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <div className="p-5 border-2 border-slate-500 rounded-2xl shadow-xl">
        <p className="text-center font-bold text-xl">Enter your credentials</p>
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

        {/* <a href="/signup" className="form-link">
          Sign up
        </a> */}
      </div>
    </div>
  );
};

export default LoginPage;
