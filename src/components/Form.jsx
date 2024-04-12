import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Form = () => {
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
      <p className="text-xl">Create an account</p>

      <div className=" flex flex-col mt-6">
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <p>Role</p>

      <div className=" flex flex-col mt-6">
        Admin
        <input
          type="radio"
          value="admin"
          checked={role === "admin"}
          onChange={(event) => {
            setRole(event.target.value);
          }}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded"
        />
        Voter
        <input
          type="radio"
          value="voter"
          checked={role === "voter"}
          onChange={(event) => {
            setRole(event.target.value);
          }}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded"
        />
      </div>

      <div className=" flex flex-col mt-6">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className=" flex flex-col mt-6">
        <label>Enter Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          className="bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <button
        onClick={handleRegister}
        className="mt-6 bg-primary text-white w-full h-12 rounded-lg hover:border-2 hover:border-primary hover:bg-white hover:text-primary"
      >
        Sign Up
      </button>
      <p className="text-red-500 mt-6 font-semibold text-center">{error}</p>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </form>
  );
};

export default Form;
