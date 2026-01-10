import { useState } from "react";
import bannerImage from "../../docs/assets/profile_photo.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Android Developer",
    desc1: `I'm Prashant Yadav, a passionate and versatile developer with expertise in front-end, back-end, and full-stack development.`,
    desc2: `I specialize in building dynamic, responsive web applications using modern technologies like React, JavaScript, and CSS. My goal is to create user-friendly, efficient, and innovative digital experiences. With a strong commitment to quality and continuous learning, I thrive on solving complex problems and delivering impactful solutions. When I'm not coding, I enjoy exploring new tools and contributing to open-source projects.`,
    actionButton: {
        title: "Read More...",
        link: '/readmore'
    }
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-12 px-4 md:py-16">
        <h1 className="text-center text-2xl md:text-4xl py-8 md:py-16 underline font-bold">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              className="rounded-full shadow-lg w-32 sm:w-44 md:w-60 lg:w-72 h-32 sm:h-44 md:h-60 lg:h-72 object-cover"
              src={data.image}
              alt="alternate_image"
            />
          </div>
          <div className="w-full md:w-2/3 text-container flex justify-center">
            <div className="space-y-5 w-full px-2 md:px-6">
              <h1 className="text-xl md:text-4xl font-semibold ">
                {data.title}
              </h1>
              <p className="text-sm md:text-base">
                {data.desc1}
              </p>
              <p className="text-sm md:text-base">{data.desc2}</p>
              <a href={data.actionButton.link} className="inline-block bg-orange-500 px-3 py-2 text-sm md:text-base rounded-full shadow-lg ">
                {data.actionButton.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
