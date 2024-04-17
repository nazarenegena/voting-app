import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const userDetails = {
    email: email,
    password: password,
    name: name,
    role: role,
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signUp(email, password, userDetails);
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="w-1/2 mt-9">
      <p className="text-2xl font-medium">Create an account</p>

      <div className=" flex flex-col mt-8">
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:ring-primary focus:border-primary rounded"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>

      <div className=" flex flex-col mt-10">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:ring-primary focus:border-primary rounded"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <div className=" flex flex-col mt-10">
        <label>Enter Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:ring-primary focus:border-primary rounded"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <p className="mt-8">Role</p>

      <div className=" flex mt-6 align-center">
        <input
          type="radio"
          value="admin"
          checked={role === "admin"}
          onChange={(event) => {
            setRole(event.target.value);
          }}
          className="bg-zinc-100 h-6 w-6 checked:bg-primary text-primary focus:ring-primary focus:border-primary"
        />
        <label className="ml-3">Admin</label>

        <input
          type="radio"
          value="voter"
          checked={role === "voter"}
          onChange={(event) => {
            setRole(event.target.value);
          }}
          className="bg-zinc-100 h-6 w-6 ml-8 checked:bg-primary text-primary focus:ring-primary focus:border-primary"
        />
        <label className="ml-3">Voter</label>
      </div>

      <button
        onClick={handleRegister}
        className="mt-16 bg-primary text-white w-full h-12 rounded-lg hover:border-2 hover:border-primary hover:bg-white hover:text-primary"
      >
        Sign Up
      </button>
      <p className="text-red-500 mt-6 font-semibold text-center">{error}</p>
      <div className="p-4 box mt-3 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
