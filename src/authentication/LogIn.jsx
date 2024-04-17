import React from "react";
import LoginForm from "../components/LoginForm";
import login from "../Images/login.svg";

const LogIn = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center bg-faded ">
        <img src={login} width={600} alt="login" />
      </div>
      <div className="flex justify-center mt-28">
        <LoginForm />
      </div>
    </div>
  );
};

export default LogIn;
