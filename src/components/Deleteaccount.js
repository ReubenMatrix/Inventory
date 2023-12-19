import React, { useEffect, useState } from 'react'

function Deleteaccount() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className='flex flex-col items-center w-full '>
    <div className='flex text-xl font-bold'>
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} mb-1`}>Delete Account</h2>
    </div>

    <div className='flex flex-col items-start mb-3 mt-0'>
     <p className={`${darkMode ? 'text-white' : 'text-black'} m-0`}>Are you sure you want to delete your account?</p>
    </div>

    <div className='flex flex-col items-center'>
        <p className='font-semibold m-0'>Reason</p>
        <div className='flex flex-row text-sm p-2'>
          <div className={`${darkMode ? 'bg-white' : 'bg-gray-200'} rounded flex cursor-pointer  mr-5  p-2 `}>
            Not satisfied
          </div>
          <div className={`${darkMode ? 'bg-white' : 'bg-gray-200'} rounded flex cursor-pointer  mr-5  p-2 `}>
            Privacy concerns
          </div>
          <div className={`${darkMode ? 'bg-white' : 'bg-gray-200'} rounded flex cursor-pointer  mr-5  p-2 `}>
            Service not needed
          </div>
        </div>
    </div>

    <div className='flex mt-1'>
       
        <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} cursor-pointer  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[52px] overflow-hidden border-[1px] border-solid border-black flex items-center justify-center`}>Delete Account</button>
    </div>


</div>
  )
}

export default Deleteaccount
