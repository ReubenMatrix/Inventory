import React, { useEffect, useState } from 'react'


function Professionalinfo() {

    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (   
      <div className='flex items-start'>
          <div className=" flex  flex-row  w-full border-r">
              <div className='flex flex-1/2 flex-col mr-5 items-center '>

                  <div className='flex items-start'>
                      <h1 className={`${darkMode ? 'text-white' : 'text-black'} mr-10 p-0`}>Professional Information</h1>
                  </div>

                  <div className='flex flex-col pr-10 ml-[100px] items-start'>

                      <div className='flex flex-col items-start mt-6 '>
                          <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Educational Details</div>
                          <input
                              className=' text-xl rounded-md box-border mr-[180px]  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                              placeholder='Enter your educational details' />
                      </div>

                      <div className='flex flex-col items-start mt-6 '>
                          <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Specialization</div>
                          <input
                              className=' text-xl rounded-md box-border mr-[180px]    p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                              placeholder='Enter your specialization' />
                      </div>

                      <div className='flex flex-col items-start mt-6 '>
                          <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>About</div>
                          <input
                              className=' text-xl rounded-md box-border  mr-[180px]  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                              placeholder='Write about yourself' />
                      </div>

                      <div className='flex flex-col items-start mt-6 '>
                          <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Experience</div>
                          <input
                              className=' text-xl rounded-md box-border  mr-[180px]  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                              placeholder='Enter your experience' />
                      </div>

                  </div>
              </div>


              <div className=" border-r ml-10 mt-3 flex flex-1/2 items-end justify-end">
                  <div className='flex '>
                  <button className={`${darkMode ? 'bg-black text-white border-white' : 'bg-lightcyan text-black border-black'} cursor-pointer mr-3  text-black  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Reset</button>
                  <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} cursor-pointer mr-3  text-black border-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[140px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Update</button>
                  </div>
              </div>

          </div>
      </div>
         
  )
}

export default Professionalinfo
