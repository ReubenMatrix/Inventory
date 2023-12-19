import React, { useEffect, useState } from 'react'

function Edit() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-[#4E4D4D]' : ' bg-teal'} flex flex-col  justify-center w-[1320px] items-center font-inter`}>
      <h1 className='text-white  text-xlg font-bold'>Edit Profile</h1>
      <div className='flex mb-3'>
                  <button className={`${darkMode ? 'bg-[#4E4D4D] text-white' : 'bg-lightcyan text-black'} cursor-pointer mr-3  text-black border-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Cancel</button>
                  <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} cursor-pointer mr-3  text-black border-white rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[140px] h-[45px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}>Save</button>

              </div>
 
    </div>
  )
}

export default Edit
