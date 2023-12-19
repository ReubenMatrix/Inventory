import React, { useEffect, useState } from 'react'
import '../global.css'
import Profilenavbar from '../components/Profilenavbar'
import Sidebar from '../components/Sidebar'
import Profilepic from '../components/Profilepic'
import Profileinfo from '../components/Profileinfo'
import Patientreviews from '../components/Patientreviews'
import Appointments from '../components/Appointments'
import Bottombar from '../components/Bottombar'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();
    const handleButton3Click = () => {
        console.log("Button clicked!");
        navigate("/edit");
      }; 

      const storedDarkMode = localStorage.getItem('darkMode');
      const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
    
      useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);

  return (
      <main className={`${darkMode ? 'bg-black' : 'bg-lightcyan'}`}>
          <Profilenavbar />
          <div className="flex flex-row z-999">
              <Sidebar />

              <div className='flex p-1 flex-col font-inter'>
                  <div className="flex-1 p-1 flex">

                      <div className="w-1/4 p-2 border-r">
                          <Profilepic />
                      </div>


                      <div className="w-3/6 p-2 border-r flex items-start justify-center">
                          <Profileinfo />
                      </div>


                      <div className="w-1/10 p-3 flex items-center">
                          <button className="bg-black w-[150px] cursor-pointer text-white p-2 border-[1px] border-white  rounded flex items-center justify-center" onClick={handleButton3Click}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                              </svg>
                              Edit Profile
                          </button>
                      </div>
                  </div>

                  <div className="mt-0 flex items-center justify-center">
                      <div className="p-2 border-r">
                          <Patientreviews />
                      </div>
                  </div>

                  <div className="mt-0 flex items-center justify-center">
                      <div className="p-2 border-r">
                          <Appointments />
                      </div>
                  </div>

                  <Bottombar/>
              </div>
          </div>
      </main>

  )
}

export default Profile
