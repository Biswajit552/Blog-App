import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black z-10 w-[200px] flex flex-col items-start absolute top-12 right-6 cursor-pointer md:right-36 rounded-md p-4 space-y-4 ">
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500">
          <Link to={"/login"}>Login</Link>{" "}
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500">
          <Link to={"/register"}>Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">
          <Link to={"/profile/" + user._id}>Profile</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">
          <Link to={"write"}>Write</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">
          My <Link to={"/myblogs/" + user._id}>My blogs</Link>
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-white text-sm hover:text-gray-500"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
