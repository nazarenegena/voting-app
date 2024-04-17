import React from "react";
import RegisterForm from "../components/RegisterForm";
// import registerImg from "../Images/registerImg.png";
import register from "../Images/register.svg";

const Register = ({ users, setUsers }) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center bg-faded ">
        <img src={register} width={600} alt="register" />
      </div>
      <div className="flex justify-center mt-20">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
