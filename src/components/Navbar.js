
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/additem");
  };

  return (
    <nav className={`relative ${darkMode ? 'bg-[#201F1F]' : 'bg-lightcyan'} w-full h-[1024px] overflow-hidden text-left text-sm text-black font-inter`}>
      <button className="absolute top-2 right-2 p-2 rounded-md bg-gray-300 hover:bg-gray-400"
        onClick={handleToggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
        <section className={`absolute top-[91px] left-[0px] ${darkMode ? 'bg-black border-white' : 'bg-white border-black'} box-border w-full h-[63px] overflow-hidden text-left text-lg text-white font-inter border-t-[1px] border-solid border-b-[1px]`}> 
        <button onClick={handleButtonClick} className="flex items-center justify-center absolute top-[5px] left-[769px] rounded-3xs bg-[#14ACC7] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[156px] h-[50px] overflow-hidden opacity-[0.9] text-xl cursor-pointer">
          <div className="font-semibold text-white">
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


        <div className="absolute top-[18px] left-[144px] w-[177px] h-[29px] text-[24px] text-teal">
          <img
            className="absolute top-[4.5px] left-[158.5px] w-[20.74px] h-[21px]"
            alt=""
            src="/group-27.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Prescription
          </div>
        </div>
        </section>
    </nav>
  )
}

export default Navbar





