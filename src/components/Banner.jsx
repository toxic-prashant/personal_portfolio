import bannerImage from "../assets/genetic-data-svgrepo-com.svg";
import bannerBackground from "../assets/banner_wallpaper.svg";
const Banner=()=> {
    return (
        <div style={{
            backgroundImage: `url(${bannerBackground})`, 
            backgroundSize: "cover",
        }
        } className="main-container flex h-screen items-center">
            <div className="w-full flex justify-center text-white">
                <div className="w-2/3 ">
                <h3 className="text-3xl font-semibold">Hi, I am</h3>
                <h1 className="mt-2 text-5xl font-bold">Prashant Yadav</h1>
                <h2 className="mt-2 text-3xl">I am a Frontend Developer.</h2>
                <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe possimus quam consequatur quos nam. Quae eaque repellendus possimus ipsum cupiditate atque, animi itaque illum sunt accusantium labore a doloremque. Cumque asperiores, ducimus ipsa incidunt eveniet neque sunt voluptatibus fugiat, odio quae atque optio repudiandae tenetur ab eligendi maxime aliquam non?</p>
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
                <a href="/contact" className="text-1xl px-3 py-2 bg-orange-500 shadow-lg rounded-full">Contact Me</a>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img className="rounded-full shadow-lg w-96 h-96" src={bannerImage} />
            </div>
        </div>
    )
}

export default Banner;