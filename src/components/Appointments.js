import React, { useEffect, useState } from 'react'

function Appointments() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
      <div className='flex flex-col items-center'>
          <h2 className={`${darkMode ? 'text-white ' : 'text-black'} `}>Appointments</h2>
          <div className='flex flex-row items-center'>
              <div className='flex flex-col p-10 items-center '>
                  <div className='flex'>
                      <img src='/calendar2.png' />
                  </div>
                  <div className='flex mb-0'>
                      <p  className={`${darkMode ? 'text-white ' : 'text-black'} text-lg font-medium`}>Upcoming Appointments</p>
                  </div>
                  <div className='flex'>
                      <p  className={`${darkMode ? 'text-white ' : 'text-gray-500'} text-sm`}>5 Appointments Scheduled</p>
                  </div>
              </div>

              <div className='flex flex-col p-10 items-center'>

                  <div className='flex'>
                      <img src='/clock.png' />
                  </div>
                  <div className='flex'>
                      <p  className={`${darkMode ? 'text-white ' : 'text-black'} text-lg font-medium`}>Pending Appointments</p>
                  </div>
                  <div className='flex'>
                      <p  className={`${darkMode ? 'text-white ' : 'text-gray-500'} text-sm`}>3 New appointment requests</p>
                  </div>
              </div>

              <div className='flex flex-col p-10 items-center'>

                  <div className='flex '>
                      <img src='/tick.png' />
                  </div>
                  <div className='flex'>
                      <p className={`${darkMode ? 'text-white ' : 'text-black'} text-lg font-medium`}>Completed Appointments</p>
                  </div>
                  <div className='flex'>
                      <p  className={`${darkMode ? 'text-white ' : 'text-gray-500'} text-sm`}>15 Appointments completed</p>
                  </div>
              </div>


          </div>
      </div>
  )
}

export default Appointments
