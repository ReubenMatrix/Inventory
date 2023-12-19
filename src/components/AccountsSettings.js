import React, { useEffect, useState } from 'react'

function AccountsSettings() {

    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
      <div className='flex flex-col items-center w-full '>
          <div className='flex text-xl font-bold'>
              <h2 className={`${darkMode ? 'text-white' : 'text-black'}`}>Account Settings</h2>
          </div>

          <div className='flex flex-col items-start mb-3'>
              <div className='flex mb-1'>
                  <label className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Email</label>
              </div>
              <div className='flex mb-2'>
                  <input
                      type='email'
                      placeholder='Enter your email'
                      className='border border-gray-300 p-2 w-[600px]'
                  />
              </div>
              <div className={`${darkMode ? 'text-white' : 'text-gray-500'} flex text-sm`}>
                  Required
              </div>
          </div>

          <div className='flex flex-col items-start'>
              <div className='flex mb-1'>
                  <label className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Password</label>
              </div>
              <div className='flex mb-2'>
                  <input
                      type='password'
                      placeholder='Enter password'
                      className='border border-gray-300 p-2 w-[600px]'
                  />
              </div>
              <div className={`${darkMode ? 'text-white' : 'text-gray-500'} flex text-sm`}>
                  Required
              </div>
          </div>

          <div className='flex mt-3'>
              <button className={`${darkMode ? 'bg-black text-white border-white' : 'bg-lightcyan text-black border-black'} cursor-pointer mr-3  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Cancel</button>
              <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} cursor-pointer mr-3  text-black border-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[140px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Change Password</button>
          </div>


      </div>
  )
}

export default AccountsSettings
