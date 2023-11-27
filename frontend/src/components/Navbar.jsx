import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [menu, setMenu] = useState(false);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className=" text-base md:text-xl font-extrabold">
        <Link to={"/"}>
          Blogi<span className="text-gray-500">FY</span>
        </Link>
      </h1>
      {path === "/" && (
        <div className="flex justify-center items-center space-x-0">
          <input
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="search post "
            className="outline-none px-3 w-36"
          />
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer"
          >
            <AiOutlineFileSearch className="md:text-2xl" />
          </p>
        </div>
      )}
      <div className=" hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to={"/write"}>Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to={"/login"}>Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu} className="">
            <p className="cursor-pointer   relative">
              <FaBarsStaggered />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3>
            <Link to={"/register"}>Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer relative ">
          <FaBarsStaggered />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
