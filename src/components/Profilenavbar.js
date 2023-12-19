import React, { useEffect, useState } from 'react'

function Profilenavbar() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
  return (
      <nav className={`${darkMode ? 'bg-[#4E4D4D]' : 'bg-white'} p-4 flex items-center justify-between sticky top-0 z-50 font-inter`} >

          <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the path to your image
                      alt="Profile"
                      className="w-full h-full object-cover"
                  />
              </div>
              <span className={`${darkMode ? 'text-white' : 'text-black'} text-lg font-bold ml-4 `}>Account</span>
          </div>
          <div className="flex items-center">

              <div className={`${darkMode ? 'text-white' : 'text-black'} px-4`}>Home</div>

              <div className={`${darkMode ? 'text-white' : 'text-black'} px-4`}>Notifications</div>

              <div className={`${darkMode ? 'text-white' : 'text-black'} px-4`}>Messages</div>

              <div className="relative">

                  <div className="relative">
                      <input
                          type="text"
                          placeholder="Search in site"
                          className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2"
                      />
                      <button className="absolute right-0 top-0 mt-1 mr-0.5 ">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      </nav>
    
  )
}

export default Profilenavbar
