import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../url";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handelRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] ">
        <h1 className="text-xl font-bold ">Create an account</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border-2 border-black outline-0"
          type="text"
          placeholder="Enter your username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border-2 border-black outline-0"
          type="text"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border-2 border-black outline-0"
          type="password"
          placeholder="Enter your password"
        />
        <button
          onClick={handelRegister}
          className="w-full px-2 py-2 text-sm text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black uppercase"
        >
          create
        </button>
        {error && (
          <h3 className="text-red-500 text-sm">Something went wrong</h3>
        )}
        <div className="flex justify-start items-center space-x-2">
          <p>Already have an account?</p>
          <p className="text-blue-400 underline">
            <Link to={"/login"}>Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
