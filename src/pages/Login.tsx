import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 border-2 border-slate-500 rounded-2xl">
        <form>
          <label htmlFor="user-name">User Name:</label>
          <input type="text" id="user-name" />
        </form>
      </div>
    </div>
  );
};

export default Login;
