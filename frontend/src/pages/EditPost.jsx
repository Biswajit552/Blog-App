import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const EditPost = () => {
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

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
  return (
    <div className="px-6 md:px-[200px] mt-8">
      <h1 className="font-bold md:text-2xl text-xl mt-8">Edit a post</h1>
      <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
        <input
          type="text"
          placeholder="Enter your post title"
          className="px-4 py-2 outline-none"
        />
        <input type="file" className="px-4" />
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
          cols={30}
          rows={15}
          className="px-4 py-2 outline-none border border-gray-600"
          placeholder="Enter post Descriptions"
        />
        <button className="bg-black w-full mx-auto md:w-[20%] text-white font-semibold px-4 py-2 md:text-lg">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;
