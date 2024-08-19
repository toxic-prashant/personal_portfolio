import { useState } from "react";
import bannerImage from "../assets/PRASHANT.jpeg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Android Developer",
    desc1: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium doloremque velit dolorem ipsam quos quasi laudantium debitis ducimus deserunt ex.`,
    desc2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam, adipisci quos dicta vitae non, provident sequi delectus temporibus sint commodi ullam impedit dolorem mollitia fugiat molestiae, eum nulla cumque laboriosam alias numquam illo tenetur? Saepe expedita vero officia, perspiciatis at debitis ratione earum provident sunt animi explicabo doloribus? Laudantium.`,
    actionButton: {
        title: "Read More...",
        link: '/readmore'
    }
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center text-4xl py-16 underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          <div className="w-full flex justify-center image-container">
            <img
              className="rounded-full shadow-lg w-96 h-96"
              src={data.image}
              alt="alternate_image"
            />
          </div>
          <div className="w-full text-container flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-4xl font-semibold ">
                {data.title}
              </h1>
              <p>
                {data.desc1}
              </p>
              <p>{data.desc2}</p>
              <button onClick={data.actionButton.link} className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow-lg ">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
