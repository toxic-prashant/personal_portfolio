import bannerImage from "../assets/genetic-data-svgrepo-com.svg";
const About=() => {
    return (
        <>
        <div className="main-container">
        <h1 className="text-center text-4xl py-16 underline font-bold">About Me</h1>

        <div className="flex items-center">
            <div className="w-full flex justify-center image-container">
                <img className="rounded-full shadow-lg w-96 h-96" src={bannerImage} alt="alternat_image" />
            </div>
            <div className="w-full text-container flex justify-center">
                <div className="space-y-5 w-2/3">
                <h1 className="text-4xl font-semibold ">Java Developer & Android Developer</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium doloremque velit dolorem ipsam quos quasi laudantium debitis ducimus deserunt ex.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam, adipisci quos dicta vitae non, provident sequi delectus temporibus sint commodi ullam impedit dolorem mollitia fugiat molestiae, eum nulla cumque laboriosam alias numquam illo tenetur? Saepe expedita vero officia, perspiciatis at debitis ratione earum provident sunt animi explicabo doloribus? Laudantium.</p>
                <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow-lg ">Read more...</button>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default About;