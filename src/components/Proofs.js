import React, { useEffect, useState } from 'react'

function Proofs() {

    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
      <div className='flex flex-col ml-10 mb-5 mt-5 items-center'>
          <div className='flex flex-col ml-7 items-start '>
              <div className='flex flex-col items-start'>
                  <h1 className={`${darkMode ? 'text-white' : 'text-black'} flex p-0 m-0`}>Proofs</h1>
                  <p className={`${darkMode ? 'text-white' : 'text-black'} flex p-0 m-0`}>Kindly upload the required documents for verification</p>
              </div>


              <div className='flex flex-row mt-5 items-start'>
                  <div className='flex flex-col items-start'>
                      <h2 className={`${darkMode ? 'text-white' : 'text-black'} flex p-0 m-0`}>Identity Proof</h2>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} flex p-0 m-0`}>
                          Upload any of the given documents to ensure that the ownership of your profile remains with you.
                      </p>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} flex p-0 m-0`}>
                          Make sure to get the full and clear image of the document
                      </p>
                  </div>
              </div>

              <div className='flex flex-row  mt-4 items-start'>
                  <div className='flex flex-col '>
                      <p className={`${darkMode ? 'text-white' : 'text-black'} text-lg  m-0 `}>Acceptable Documents</p>
                      <ul className='m-0 '>
                        <li className={`${darkMode ? 'text-white' : 'text-black'}`}>Aadhar card</li>
                        <li className={`${darkMode ? 'text-white' : 'text-black'}`}>Voter Card</li>
                        <li className={`${darkMode ? 'text-white' : 'text-black'}`}>Driving License</li>
                        <li className={`${darkMode ? 'text-white' : 'text-black'}`}>Any other Government ID</li>
                      </ul>
                  </div>
              </div>

              <div className='flex flex-row p-3 items-center'>
                  <div className='flex flex-col justify-between mr-[100px]'>
                      <input className='text-xl rounded-md box-border mr-[120px]  p-5 w-full h-[40px] overflow-hidden border-[1px] border-solid border-black' placeholder='Upload here' />
                      <p className='text-gray-500 p-0 m-0 text-sm'>Accepted file formats are PDF, JPG, PNG</p>
                  </div>
                  <div className='flex flex-1/2 '>
                  <button className={`${darkMode ? 'bg-black text-white border-white' : 'bg-lightcyan text-black border-black'} cursor-pointer rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[40px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Submit</button>
                  </div>
              </div>

          </div>
      </div>

  )
}

export default Proofs
