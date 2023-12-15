import React, { useEffect, useState } from 'react'
import '../index.css'

function Additemnavbar() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
  
  return (
 
      <nav className= {`${darkMode ? 'bg-[#201F1F]' : 'bg-lightcyan'}  absolute w-full h-[2010px] overflow-hidden text-left text-sm text-black font-inter`}>
          <section className={`${darkMode ? 'bg-black border-white' : 'bg-white border-black'} absolute top-[91px] left-[0px]  box-border w-full h-[63px] overflow-hidden text-left text-lg text-black font-inter border-t-[1px] border-solid border-b-[1px]`}>
              <div className={`absolute top-5 left-40 ${darkMode ? 'bg-black' : 'bg-white'} box-border w-1440 h-70 overflow-hidden  flex items-center`}>
                  <div className="w-[153px] h-6  text-teal flex items-center">
                      <b className="mr-2">Prescription</b>
                      <img
                          className="w-[17px] h-[18px] object-cover"
                          alt=""
                          src="/group-66@2x.png"
                      />
                  </div>
                  <div className="w-[120px] h-[22px]  text-teal flex items-center mr-8">
                      <b className="mr-2">Add Items</b>
                      <div className="w-3.5 h-4 flex items-center justify-center">
                          <img
                              className="w-[17px] h-[18px] object-cover"
                              alt=""
                              src="/group-66@2x.png"
                          />
                      </div>
                  </div>
              </div>

              <img
                  className="absolute top-[0px] left-[1090px] w-[60px] h-[60px] overflow-hidden object-cover"
                  alt=""
                  src="/materialsymbolshelp@2x.png"
              />
          </section>
      </nav>
  )
}

export default Additemnavbar