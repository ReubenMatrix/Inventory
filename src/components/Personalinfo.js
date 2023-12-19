import React, { useEffect, useState } from 'react'

function Personalinfo() {

    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-start '>
          <div className='flex items-start'>
              <h1 className={`${darkMode ? 'text-white' : 'text-black'} ml-7`}>Personal Information</h1>
          </div>

          <div className='flex flex-row p-3 items-center'>
              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Full Name</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your full name' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Email</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10   p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your email address' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Phone</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your phone number' />
              </div>
          </div>

          <div className='flex flex-row p-3 mt-4 items-start'>
              <div className='flex flex-col pr-12 mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Gender</div>
                  <div className='flex flex-row mr-12'>
                    <div className='bg-[#b1c2c5] p-2 m-2 rounded'>Male</div>
                    <div className='bg-[#b1c2c5] p-2 m-2  rounded'>Female</div>
                    <div className='bg-[#b1c2c5] p-2 m-2  rounded'>Others</div>
                  </div>
                 
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Date Of Birth</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10   p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your date of birth (DD/MM/YY)' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Blood Group</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your blood group' />
              </div>
          </div>

          <div className='flex flex-row p-3 mt-12 items-center'>
              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Area</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your area' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Locality</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10   p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your locality' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>City</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your city' />
              </div>
          </div>
          <div className='flex flex-row p-3 items-center'>
              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>State</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your state' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Country</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10   p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your country' />
              </div>

              <div className='flex flex-col mr-12'>
                  <div className={`${darkMode ? 'text-white' : 'text-black'} flex font-bold`}>Pincode</div>
                  <input
                      className=' text-xl rounded-md box-border mr-10  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black'
                      placeholder='Enter your pincode' />
              </div>
          </div>
          <div className='flex'>
            <p className={`${darkMode ? 'text-white' : 'text-black'} flex font-semibold`}>Address (Mandatory to fill for Clinics/Hospitals)</p>
          </div>

          
          
      </div>
      <div className='flex mb-3'>
                  <button className={`${darkMode ? 'bg-black text-white border-white' : 'bg-lightcyan text-black border-black'} cursor-pointer mr-3  text-black  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Reset</button>
                  <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} cursor-pointer mr-3  text-black border-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[140px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Update</button>
              </div>
      </div>
      
  )
}

export default Personalinfo
