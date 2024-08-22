import Typed from "typed.js";
import bannerImage from "../assets/PRASHANT.jpeg";
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
        } className="main-container flex h-screen items-center">
            <div className="w-full flex items-center justify-center text-white">
                <div className="w-2/3 space-y-2 ms-10">
                <h3 className="text-3xl font-semibold">Hi, I am</h3>
                <h1 className="mt-2 text-5xl font-bold">Prashant Yadav</h1>
                <h2 className="mt-2 text-3xl">And I am a <span className="font-bold underline" ref={el}></span></h2>
                <p className="mt-2">A versatile developer skilled in front-end, back-end, and full-stack development, focused on building dynamic, responsive web applications. Committed to delivering quality work and ensuring user satisfaction through modern technologies.</p>
                <div className="icons-container space-x-5 flex ">
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-solid text-4xl fa-envelope"></i>
                </div>
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands text-4xl fa-github"></i>
                </div>
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands text-4xl fa-instagram"></i>
                </div>
                <div className="hover:bg-orange-400 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands text-4xl fa-linkedin"></i>
                </div>
                </div>
                <br />
                <a href="mailto:yadavprashant1016@gmail.com" className="text-1xl px-3 py-2 bg-orange-500 shadow-lg rounded-full">Contact Me</a>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img className="rounded-full my-2 shadow-lg w-96 h-96" src={bannerImage} />
            </div>
        </div>
    )
}

export default Banner;