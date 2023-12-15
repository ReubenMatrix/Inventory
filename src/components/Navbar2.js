
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar2() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);



  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/additem");
  };

  return (
    <nav className={`relative ${darkMode ? 'bg-[#201F1F]' : 'bg-lightcyan'} w-full h-[1024px] overflow-hidden text-left text-sm text-black font-inter`}>
        <section className={`absolute top-[91px] left-[0px] ${darkMode ? 'bg-black border-white' : 'bg-white border-black'} box-border w-full h-[63px] overflow-hidden text-left text-lg text-white font-inter border-t-[1px] border-solid border-b-[1px]`}> 
        <button className="flex items-center justify-center absolute top-[5px] left-[769px] rounded-3xs bg-[#14ACC7] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[156px] h-[50px] overflow-hidden opacity-[0.9] text-xl cursor-pointer">
          <div className="font-semibold text-white" onClick={handleButtonClick}>
            New Item
          </div>
          <img
            className="absolute top-[14px] left-[12px] w-5 h-5"
            alt=""
            src="/group-16.svg"
          />
        </button>

        <button className="flex items-center justify-center absolute top-[5px] left-[1138px] rounded-3xs bg-[#14ACC7] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[180px] h-[50px] overflow-hidden opacity-[0.9] text-xl cursor-pointer">
          <div className="font-semibold text-white">
            Consume stock
          </div>
        </button>

        <button className="flex items-center justify-center absolute top-[5px] left-[987px] rounded-3xs bg-[#14ACC7] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[146px] h-[50px] overflow-hidden opacity-[0.9] text-xl cursor-pointer">
          <div className="font-semibold text-white">
            Add stock
          </div>
        </button>

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
        </section>
    </nav>
  )
}

export default Navbar2