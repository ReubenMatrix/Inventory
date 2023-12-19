import React, { useEffect, useState } from 'react'

function Medicalproof() {

    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
    <div className='flex flex-col ml-10 mb-5 mt-5 items-center'>
    <div className='flex flex-col ml-7 items-start '>
              <div className='flex flex-col items-start'>
                  <h2 className={`${darkMode ? 'text-white' : 'text-black'} flex p-0 m-0 font-bold`}>Medical registeration proof*</h2>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-500'} flex p-0 m-0 `}>Only licensed and practicing doctors are listed.</p>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-500'} flex p-0 m-0 `}>
                      Make sure to get the full and clear image of the document
                  </p>
              </div>


      

        <div className='flex flex-row  mt-4 items-start'>
            <div className='flex flex-col '>
                <p className={`${darkMode ? 'text-white' : 'text-black'} text-lg m-0`}>Acceptable Documents</p>
                <ul className='m-0 '>
                  <li className={`${darkMode ? 'text-white' : 'text-black'}  m-0`}>Medical Registration Certificate</li>
                  <li className={`${darkMode ? 'text-white' : 'text-black'}  m-0`}>2335452424 Maharashtra Medical Council</li>
                </ul>
            </div>
        </div>

   

        <div className='flex flex-row p-3 items-center'>
            <div className='flex flex-col justify-between mr-[100px]'>
            <p className={`${darkMode ? 'text-white' : 'text-black'} p-0 mb-1`}>For Clinic/Hospital Upload Establishment proof</p>
                <input className='text-xl rounded-md box-border mr-[120px]  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black' placeholder='Upload here' />
                <p className='text-gray-500 p-0 m-0 text-sm'>Accepted file formats are PDF, JPG, PNG</p>
            </div>
                  <div className='flex flex-1/2 '>
                      <button className={`${darkMode ? 'bg-black text-white border-white' : 'bg-lightcyan text-black border-black'} cursor-pointer mr-3  text-black  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Back</button>
                      <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} cursor-pointer mr-3  text-black border-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[140px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Save</button>
                  </div>
        </div>

    </div>
</div>


  )
}

export default Medicalproof
