import React from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

function Expertise() {
  return (
    <>
      <div className="mt-16">
        <h1 className="mb-16 text-5xl font-bold underline text-center">
          My Expertise
        </h1>
        <div style={{
            backgroundImage: `url(${bannerBackground})`, 
            backgroundSize: "cover",
        }
        } className="box-container flex items-center py-16 ">
          <div className="left-box text-white flex justify-center">
            <div className="w-2/3 text-center space-y-4">
            <h1 className="text-4xl font-bold ">I love these technologies</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit modi assumenda, illo suscipit, vero dolor ratione perspiciatis consequuntur commodi totam mollitia accusamus quaerat praesentium! Nesciunt praesentium quidem facere illo.</p>
            <button className="px-4 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">Hire me</button>
            </div>
          </div>
          <div className="right-box flex justify-center">
            <div className="flex justify-center h-fit space-x-3 flex-wrap  w-2/3">
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Core Java</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Advance Java</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Spring Boot</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Hibernate</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">My SQL</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">React.js</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">J2EE</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Postman</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Spring Framework</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">HTML</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">CSS</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">TailWind CSS</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
