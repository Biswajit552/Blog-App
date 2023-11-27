import React, { useContext, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL, IF } from "../url";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";

const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(false);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + postId);
      // console.log(res.data);
      setPost(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [postId]);
  return (
    <>
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center ">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-black md:text-3xl">
              {post.title}
            </h1>
            {user?._id === post?.userId && (
              <div className="flex items-center justify-center space-x-2">
                <p>
                  <CiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img src={IF + post.photo} className="w-full mx-auto mt-8" />
          <p className="mx-auto mt-8">{post.desc}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((c, i) => (
                <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          {/* write a comment */}
          <div className="flex flex-col mt-4 md:flex-row gap-4 md:mb-2">
            <input
              type="text"
              placeholder="write a comment "
              className="md:w-[90%]  px-4 mt-4 md:mt-0 outline-none border border-gray-400"
            />
            <button className="bg-black text-white px-4 py-2 md:[10%]">
              Add Comment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
