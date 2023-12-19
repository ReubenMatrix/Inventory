import React, { useEffect, useState } from 'react'

function Bottombar() {

  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  return (
<div className={`${darkMode ? 'bg-[#4E4D4D]' : 'bg-white'} h-[100px] w-[1320px] font-inter flex items-center ml-0`}>
    <span className={`${darkMode ? 'text-white' : 'text-black'} ml-auto mr-5`}>© 2023 CareChainAI. All rights reserved.</span>
</div>

  )
}

export default Bottombar
