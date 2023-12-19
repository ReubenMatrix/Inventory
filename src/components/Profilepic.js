import React, { useEffect, useState } from 'react'

function Profilepic() {

  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className='items-start flex flex-col font-inter'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode ? 'white' : 'black'}`} className="w-28 h-25">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      <div className={`${darkMode ? 'text-white' : 'text-gray-800'} text-lg  `}>
        <p className=' mb-0'>Male</p>
        <p  className='mt-1 mb-0'>26 yrs old</p>
        <p  className='mt-1'>India</p>
        <p  className='mt-5'>5+ yrs of experience</p>
      </div>
    </div>
  )
}

export default Profilepic
