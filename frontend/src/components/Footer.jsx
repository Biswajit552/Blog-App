import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-[1.5rem] md:px-[300px] flex justify-between text-sm md:text-lg py-8 ">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>form</p>
          <p>Support</p>
          <p>Recent Post</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>terms or services</p>
        </div>
      </div>
      <p className="py2 pb-2 text-center text-white bg-black">
        All rights reserved @blog 2023
      </p>
    </>
  );
};

export default Footer;
