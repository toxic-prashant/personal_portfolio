import Typed from "typed.js";
import bannerImage from "../../docs/assets/profile_photo.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import { useRef, useEffect } from 'react';

const Banner=()=> {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front-end Developer", "Backend Developer", "Full-Stack Developer"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });
      return () => {
        typed.destroy();
      };
    }, [])
    

    return (
        <div style={{
            backgroundImage: `url(${bannerBackground})`, 
            backgroundSize: "cover",
        }
        } className="main-container flex flex-col md:flex-row h-screen items-center px-4 md:px-0">
            <div className="w-full flex items-center justify-center text-white">
                <div className="w-full md:w-2/3 space-y-2 md:ms-10 px-4 md:px-0">
                <h3 className="text-xl md:text-3xl font-semibold">Hi, I am</h3>
                <h1 className="mt-2 text-3xl md:text-5xl font-bold">Prashant Yadav</h1>
                <h2 className="mt-2 text-lg md:text-3xl">And I am a <span className="font-bold underline" ref={el}></span></h2>
                <p className="mt-2 text-sm md:text-base">A versatile developer skilled in front-end, back-end, and full-stack development, focused on building dynamic, responsive web applications. Committed to delivering quality work and ensuring user satisfaction through modern technologies.</p>
                <div className="icons-container space-x-3 flex mt-3">
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-gray-700">
                <a href="mailto:yadavprashant1016@gmail.com"><i class="fa-solid text-2xl md:text-4xl fa-envelope"></i></a>
                </div>
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-gray-700">
                <a href="https://github.com/toxic-prashant"><i class="fa-brands text-2xl md:text-4xl fa-github"></i></a>
                </div>
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands text-2xl md:text-4xl fa-instagram"></i>
                </div>
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-3 w-10 h-10 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-gray-700">
                <a href="https://www.linkedin.com/in/prashant-yadav07/"><i class="fa-brands text-2xl md:text-4xl fa-linkedin"></i></a>
                </div>
                </div>
                <br />
                <a href="mailto:yadavprashant1016@gmail.com" className="text-sm md:text-1xl px-3 py-2 bg-orange-500 shadow-lg rounded-full">Contact Me</a>
                </div>
            </div>
            <div className="w-full flex justify-center mt-6 md:mt-0">
                <img className="rounded-full my-2 shadow-lg w-40 sm:w-56 md:w-72 lg:w-96 h-40 sm:h-56 md:h-72 lg:h-96" src={bannerImage} />
            </div>
        </div>
    )
}

export default Banner;