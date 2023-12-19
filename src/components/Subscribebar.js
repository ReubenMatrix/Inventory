import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Subscribebar() {

    const navigate = useNavigate();
    const handleButton1Click = () => {
      console.log("Button clicked!");
      navigate("/profile");
    };   
    
    const handleButton2Click = () => {
        console.log("Button clicked!");
        navigate("/subscription");
      };  

    
      const handleButton3Click = () => {
        console.log("Button clicked!");
        navigate("/edit");
      };  

      const handleButton4Click = () => {
        console.log("Button clicked!");
        navigate("/settings");
      };  

      const storedDarkMode = localStorage.getItem('darkMode');
      const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
    
      useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);

  return (
      <div className={`${darkMode ? 'bg-[#646464]' : 'bg-white'} h-[694px] w-55  font-inter flex items-start`}>
       <ul className='p-0 mt-10 list-none items-center justify-center'>
              <li className={`${darkMode ? 'text-white hover:bg-black' : 'text-black hover:bg-teal'} p-3   hover:rounded hover:text-white cursor-pointer flex items-center  font-semibold`} onClick={handleButton1Click}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 p-0 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  My Profile
              </li>
              <li className={`${darkMode ? 'text-white hover:bg-black' : 'text-black hover:bg-teal'} p-3   hover:rounded hover:text-white cursor-pointer flex items-center  font-semibold`} onClick={handleButton2Click}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  Subscription
              </li>
              <li className={`${darkMode ? 'text-white hover:bg-black' : 'text-black hover:bg-teal'} p-3  hover:rounded hover:text-white cursor-pointer flex items-center  font-semibold`} onClick={handleButton3Click}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                  Edit Profile
              </li>
              <li className={`${darkMode ? 'text-white hover:bg-black' : 'text-black hover:bg-teal'} p-3   hover:rounded hover:text-white cursor-pointer flex items-center  font-semibold`} onClick={handleButton4Click}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                  Account Settings
              </li>
              <li className={`${darkMode ? 'text-white hover:bg-black' : 'text-black hover:bg-teal'} p-3   hover:rounded hover:text-white cursor-pointer flex items-center  font-semibold`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                  Log out
              </li>
          </ul>
      </div>
  )
}

export default Subscribebar