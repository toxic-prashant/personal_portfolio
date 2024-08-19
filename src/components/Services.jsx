import React from 'react'

function Services() {
    // useState([
    //     {
    //         title:
    //     }
    // ])
  return (
    <div>
        <div className='main-container py-16'>
            <h1 className='text-5xl text-center font-bold underline'>My Services</h1>
        </div>
        <div className="services-container space-x-5 px-10 flex mt-12 ">
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1'>
            <i class="text-4xl fa-solid fa-code"></i>
                <h1 className='text-4xl'>Web Development</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non iure soluta et quisquam est tenetur omnis sapiente autem voluptatum natus, impedit quas eveniet debitis incidunt!</p>
                <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Check</button>
            </div>
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service2'>
            <i class="text-4xl fa-solid fa-database"></i>
                <h1 className='text-4xl'>Backend  Development</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non iure soluta et quisquam est tenetur omnis sapiente autem voluptatum natus, impedit quas eveniet debitis incidunt!</p>
                <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Check</button>
            </div>
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service3'>
            <i class="text-4xl fa-regular fa-window-maximize"></i>
                <h1 className='text-4xl'>Frontend Developer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non iure soluta et quisquam est tenetur omnis sapiente autem voluptatum natus, impedit quas eveniet debitis incidunt!</p>
                <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Check</button>
            </div>
        </div>
    </div>
  )
}

export default Services