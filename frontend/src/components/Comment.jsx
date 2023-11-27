import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600 ">@biswajitswain</h3>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-gray-500 text-sm">16/7/2023</p>
          <p className="text-gray-500 text-sm">4.45AM</p>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <CiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
      <p className="px-4 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam
        libero sit illo ea, amet cumque numquam facere tenetur odio labore!
        Dignissimos dicta in quo maiores earum id molestias vel?
      </p>
    </div>
  );
};

export default Comment;
