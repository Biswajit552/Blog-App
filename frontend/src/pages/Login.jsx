import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handelLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },

        {
          withCredentials: true,
          Headers: {
            "access-control-allow-credentials": "true",
          },
        }
      );
      console.log(res.data);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] ">
        <h1 className="text-xl font-bold ">Log in your account</h1>
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
          onClick={handelLogin}
          className="w-full px-4 py-4 text-lg text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black"
        >
          LogIn
        </button>
        {error && (
          <h3 className="text-red-500 text-sm">Something went wrong</h3>
        )}
        <div className="flex justify-start items-center space-x-2">
          <p>Don't have an account?</p>
          <p className="text-blue-400 underline">
            <Link to={"/register"}>Register</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
