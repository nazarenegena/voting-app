import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {" "}
      <form className="w-1/2 mt-9">
        <p className="text-xl">Create an account</p>

        <div className=" flex flex-col mt-6">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Email Address"
            onChange={(event) => setEmail(event.target.value)}
            className={
              "bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded "
            }
          />
        </div>
        <div className=" flex flex-col mt-6">
          <label>Enter Password</label>
          <input
            type="password"
            placeholder="Password..."
            onChange={(event) => setPassword(event.target.value)}
            className={
              "bg-zinc-100 mt-2 h-10 px-5 focus:outline-primary rounded "
            }
          />
        </div>

        <button
          onClick={handleLogin}
          className="mt-6 bg-primary text-white w-full h-12 rounded-lg hover:border-2 hover:border-primary hover:bg-white hover:text-primary"
        >
          Login
        </button>
      </form>
      <p className="text-red-500 mt-6 font-semibold text-center">{error}</p>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default LogIn;
