import React, { useEffect, useState } from 'react'

function Profileinfo() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className='items-start flex flex-col font-inter text-left'>
      <div className='flex flex-row items-center justify-between' >
        <h1 className={`${darkMode ? 'text-white ' : 'text-black'} mr-40`}>Dr. Amit Rajesh Jat</h1>
        <p className='text-blue-500'>Verified</p>
      </div>
      <p className={`${darkMode ? 'text-white ' : 'text-black'} mt-2 mb-0`}>B.D.S (Ind), D.D.S(USA), Fellowship in Implantology(USA), CBM(USA),
        PGDML(Ind), Fellowship in Orthodntics
      </p>
      <p className={`${darkMode ? 'text-white ' : 'text-black'} mt-0`}>Specialized Dentist</p>
      <div className={`${darkMode ? 'text-white ' : 'text-black'} ml-10 items-center`}>
        <p>Medical proofs submitted</p>
        <p className='mt-0'><span className='text-green-600 font-bold'>91%</span>  (141 votes)</p>
      </div>
      <p className={`${darkMode ? 'text-white ' : 'text-black'}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum tortor in quam bibendum, ac
      </p>
    </div>
    
  )
}

export default Profileinfo
