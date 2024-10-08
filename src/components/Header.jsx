import { useState } from "react";

const Header=({ scrollToSection, sections })=>{
    const[brandName, setBrandName]=useState("Prashant Yadav")
    const[actionButton, setActionButton]=useState({
        title:"Download CV",
        link: "/personal_portfolio/Prashant_Yadav_Resume.pdf"
    })
    const[menuLinks, setMenuLinks]=useState([
        {
            title:"Home",
            ref: sections.homeRef,
            id:1
        },
        {
            title:"About",
            ref: sections.aboutRef,
            id:2
        },
        {
            title:"Skills",
            ref: sections.servicesRef,
            id:3
        },
        // {
        //     title:"Portfolio",
        //     ref: sections.portfolioRef,
        //     id:4
        // },
        {
            title:"Contact",
            ref: sections.footerRef,
            id:5
        },
    ])
    return (
        <div className="h-20 border main flex justify-between bg-gray-200 items-center px-16">
            <div>
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-4">

                {menuLinks.map((link)=>(
                    <a key={link.id} href="#" onClick={() => scrollToSection(link.ref)} className="hover:text-orange-600">
                        {link.title}
                    </a>
                ))}

                {/* <a href="/home" className="hover:text-orange-600">Home</a>
                <a href="/about" className="hover:text-orange-600">About</a>
                <a href="/skills" className="hover:text-orange-600">Skills</a>
                <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
                <a href="/contact" className="hover:text-orange-600">Contact</a> */}
            </div>
            <div>
                <a href={actionButton.link} download className="px-3 py-2 bg-orange-500 shadow rounded-full text-1xl">{actionButton.title}</a>
            </div>
        </div>
    );
};

export default Header;