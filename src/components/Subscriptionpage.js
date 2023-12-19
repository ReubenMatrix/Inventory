import React, { useEffect, useState } from 'react'

function Subscriptionpage() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
      <div className='flex flex-col items-start '>
          <div className='flex text-lg font-bold'>
              <h1 className={`${darkMode ? 'text-white' : 'text-black'} mb-2`}>Subscriptions</h1>
          </div>
          <div className={`${darkMode ? 'text-white' : 'text-black'} flex text-xl`}>
              Manage your Subscription plans
          </div>
          <div className='flex mt-4'>
              <button className={`${darkMode ? 'bg-white' : 'bg-lightcyan'} text-2xl cursor-pointer mr-3  text-black border-black rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[180px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Cancel Subscription</button>
              <button className="text-2xl cursor-pointer  bg-black text-white  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[150px] h-[52px] overflow-hidden border-[1px] border-solid border-white flex items-center justify-center">Upgrade plan</button>
          </div>
      </div>
  )
}

export default Subscriptionpage
