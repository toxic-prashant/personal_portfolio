import React from 'react'

function Footer() {
  return (
    <div className='py-6 bg-gray-100 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 gap-4'>
        <div className='text-center md:text-left'>
            <p className='text-sm'>&copy;2024 Prashant Yadav <span>All Rights Reserved</span></p>
        </div>
        <div className='flex space-x-4'>
            <a href="" className='hover:underline text-sm'>About</a>
            <a href="" className='hover:underline text-sm'>Privacy Policy</a>
            <a href="" className='hover:underline text-sm'>Licensing</a>
            <a href="" className='hover:underline text-sm'>Contact</a>
        </div>
    </div>
  )
}

export default Footer