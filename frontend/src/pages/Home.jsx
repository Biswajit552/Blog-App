import React, { useContext, useEffect, useState } from "react";
import HomePost from "../components/HomePost";
import axios from "axios";
import { URL } from "../url";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
// const navigate = useNavigate();
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const { search } = useLocation();
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  // console.log(user);
  // console.log(search);
  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <div className="px-8 md:px-[200px] min-h-[70vh]">
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center ">
          <Loader />
        </div>
      ) : !noResult ? (
        posts.map((post) => (
          <>
            <Link to={user ? `/posts/post/${post._id}` : "/login"}>
              <HomePost key={post._id} post={post} />
            </Link>
          </>
        ))
      ) : (
        <h3 className="text-center font-semibold mt-16">No Posts Available</h3>
      )}
    </div>
  );
};

export default Home;
