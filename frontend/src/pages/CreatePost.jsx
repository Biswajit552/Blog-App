import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  const deleteCategory = (i) => {
    let updateCats = [...cats];
    updateCats.splice(i);
    setCats(updateCats);
  };
  const addCategory = () => {
    let updateCats = [...cats];
    updateCats.push(cat);
    setCat([]);
    setCats(updateCats);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      console.log(data);
      //img upload
      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
        // console.log(imgUpload.data);
      } catch (err) {
        console.log(err);
      }
    }
    //post upload
    // console.log(post);
    try {
      const res = await axios.post(URL + "/api/posts/create", post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-6 md:px-[200px] mt-8">
      <h1 className="font-bold md:text-2xl text-xl mt-8">Create a post</h1>
      <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter your post title"
          className="px-4 py-2 outline-none"
        />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          className="px-4"
        />
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 md:space-x-8">
            <input
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              type="text"
              placeholder="Enter post category"
              className="px-4 py-2 outline-none"
            />
            <button
              onClick={addCategory}
              type="button"
              className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
            >
              Add
            </button>
          </div>
          {/* categories */}
          <div className="flex mt-3 px-4">
            {cats?.map((c, i) => (
              <div
                key={i}
                className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
              >
                <p>{c}</p>
                <p
                  onClick={() => deleteCategory(i)}
                  className="text-white bg-black  rounded-full cursor-pointer p-1 text-sm"
                >
                  <RxCross2 />
                </p>
              </div>
            ))}
          </div>
        </div>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          cols={15}
          rows={15}
          className="px-4 py-2 outline-none border border-gray-600"
          placeholder="Enter post Descriptions"
        />
        <button
          onClick={handleCreate}
          className="bg-black w-full mx-auto md:w-[20%] text-white font-semibold px-4 py-2 md:text-lg"
        >
          Create-Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
