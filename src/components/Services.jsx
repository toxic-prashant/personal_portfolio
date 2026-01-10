import React from 'react'

function Services() {
    // useState([
    //     {
    //         title:
    //     }
    // ])
  return (
    <div>
        <div className='main-container py-16 px-4'>
            <h1 className='text-3xl md:text-5xl text-center font-bold underline'>My Services</h1>
        </div>
        <div className="services-container flex flex-col md:flex-row gap-6 px-4 md:px-10 mt-8">
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 w-full md:w-1/3'>
            <i className="text-4xl fa-solid fa-code"></i>
                <h1 className='text-2xl md:text-4xl'>Web Development</h1>
                <p className='text-sm md:text-base'>I offer comprehensive web development services using modern technologies like HTML, CSS, JavaScript, React, and Spring Boot. Whether you need a sleek, responsive front-end or a powerful, scalable back-end, I have the expertise to deliver. My approach ensures that your web applications are not only visually appealing but also robust, efficient, and secure. With a focus on clean code and best practices, I create solutions that are easy to maintain and scale as your business grows.</p>
                <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-base md:text-lg'>Check</button>
            </div>
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service2 w-full md:w-1/3'>
            <i className="text-4xl fa-solid fa-database"></i>
                <h1 className='text-2xl md:text-4xl'>Backend Development</h1>
                <p className='text-sm md:text-base'>I specialize in building powerful and scalable back-end systems using technologies like Java, Spring Boot, Servlets, JSP, and JavaScript. My expertise allows me to create secure, efficient, and high-performing server-side applications that handle complex business logic and data management. Whether it's developing RESTful APIs, integrating with databases, or ensuring seamless communication between front-end and back-end, I deliver solutions that are tailored to meet your project's specific requirements.</p>
                <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-base md:text-lg'>Check</button>
            </div>
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service3 w-full md:w-1/3'>
            <i className="text-4xl fa-regular fa-window-maximize"></i>
                <h1 className='text-2xl md:text-4xl'>Frontend Development</h1>
                <p className='text-sm md:text-base'>I specialize in crafting engaging and responsive front-end experiences using technologies like HTML, CSS, JavaScript, and React. My approach focuses on creating intuitive user interfaces that are both visually appealing and functional across all devices. Whether it’s developing single-page applications with React or implementing dynamic features with JavaScript, I ensure that every project is optimized for performance, accessibility, and a seamless user experience.</p>
                <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-base md:text-lg'>Check</button>
            </div>
        </div>
    </div>
  )
}

export default Services