import React from "react";

const ProfilePost = () => {
  return (
    <div className="flex w-full mt-8 space-x-4">
      {/*left*/}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmcGDfxS6t8iPkZnrNi2Wjo6GmAIyPqPqKQ&usqp=CAU"
          alt="blog image"
          className=""
        />
      </div>
      {/*right*/}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-semibold md:mb-2 mb-1 md:text-2xl">
          10 uses of Artificial Intelligence in day to day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@biswajitswain</p>
          <div className="flex space-x-2">
            <p>16//7/2023</p>
            <p>4.45AM</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sapiente
          tempore, eius officia doloribus tempora harum ipsam sequi natus,
          dolorum ab excepturi? Obcaecati placeat voluptas optio cumque
          voluptatum sint ad? Illo officia dolor vel voluptas nihil. Inventore
          at numquam temporibus obcaecati perspiciatis. Mollitia excepturi
          incidunt vitae quidem quaerat ullam consequuntur et, nemo ipsam magnam
          atque cupiditate doloremque eveniet quam earum!
        </p>
      </div>
    </div>
  );
};

export default ProfilePost;
