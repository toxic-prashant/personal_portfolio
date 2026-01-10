import React from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

function Expertise() {
  return (
    <>
      <div className="mt-16">
        <div className="mb-8 md:mb-16 text-3xl md:text-5xl font-bold underline text-center">
          My Expertise
        </div>
        <div style={{
            backgroundImage: `url(${bannerBackground})`, 
            backgroundSize: "cover",
        }
        } className="box-container flex flex-col md:flex-row items-start md:items-center py-8 md:py-16 px-4 md:px-0 gap-8">
          <div className="left-box text-white flex justify-center w-full md:w-1/2">
                  <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                  <h1 className="text-2xl md:text-4xl font-bold ">I love these technologies</h1>
                  <p className="text-sm md:text-base">Backend-focused Java developer experienced in building high-performance REST APIs and scalable microservices using Spring Boot, Struts, and Hibernate. Skilled in SQL tuning and ERP module development, with hands-on experience improving system performance and automating CI/CD. Comfortable integrating frontend work (React, ExtJS, JavaScript) and improving test coverage with JUnit-based automation.</p>
                  {/* <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 justify-center md:justify-start">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Microservices & REST APIs</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Spring Boot & Hibernate</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">SQL & Performance Tuning</span>
                  </div> */}
                  </div>
          </div>
          <div className="right-box flex justify-center w-full md:w-1/2">
            <div className="flex justify-center h-fit gap-3 flex-wrap w-full md:w-2/3">
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Core Java</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Advance Java</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Spring Boot</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Hibernate</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">My SQL</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">React.js</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">J2EE</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Postman</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">Spring Framework</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">HTML</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">CSS</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">TailWind CSS</p>
            <p className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-400 cursor-pointer">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
