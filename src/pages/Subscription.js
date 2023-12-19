import React, { useEffect, useState } from 'react'
import Bottombar from '../components/Bottombar'
import Subscribebar from '../components/Subscribebar'
import Plans from '../components/Plans'
import Subscriptionpage from '../components/Subscriptionpage'

function Subscription() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

  return (
      <main className={`${darkMode ? 'bg-black' : 'bg-lightcyan'}`}>

          <div className="flex z-999">
              <Subscribebar />

              <div className='flex p-1 flex-col font-inter'>
                  <div className="flex-1 p-12 items-center flex">

                      <div className="w-1/2 p-5 items-center border-r">
                          <Subscriptionpage />
                      </div>


                      <div className="w-1/2 p-10 border-r flex items-center justify-center">
                          <Plans />
                      </div>

                  </div>

                  <Bottombar />
              </div>
          </div>
      </main>

  )
}

export default Subscription
