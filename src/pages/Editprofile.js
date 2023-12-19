import React, { useEffect, useState } from 'react'
import Bottombar from '../components/Bottombar'
import SettingsSidebar from '../components/SettingsSidebar'
import Edit from '../components/Edit'
import Personalinfo from '../components/Personalinfo'
import Professionalinfo from '../components/Professionalinfo'
import Proofs from '../components/Proofs'
import Medicalproof from '../components/Medicalproof'
import Editsidebar from '../components/Editsidebar'
import { useNavigate } from 'react-router-dom'

function Editprofile() {

   const navigate = useNavigate();
   const handleButtonClick = () => {
     console.log("Button clicked!");
     navigate("/profile");
   };   
   
   const storedDarkMode = localStorage.getItem('darkMode');
   const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
 
   useEffect(() => {
     localStorage.setItem('darkMode', darkMode);
   }, [darkMode]);

  return (
     <main className={`${darkMode ? 'bg-black' : 'bg-lightcyan'}`}>

        <div className="flex flex-row">
           <Editsidebar/>

           <div className='flex  flex-col font-inter'>
              <Edit />
              <div className="mt-6 mb-3 border-r flex items-center  w-full justify-center">
                 <div className='flex items-center p-2 justify-center flex-col'>
                    <div className='flex flex-row w-12 h-12 bg-gray-300 text-xl rounded-full items-center justify-center'>1</div>
                    <p className={`${darkMode ? 'text-white' : 'text-black'} font-bold`}>Personal Details</p>
                 </div>
                 <div className='flex items-center p-2 justify-center flex-col'>
                    <div className='flex flex-row w-12 h-12 bg-gray-300 text-xl rounded-full items-center justify-center'>2</div>
                    <p className={`${darkMode ? 'text-white' : 'text-black'} font-bold`}>Professional Details</p>
                 </div>
                 <div className='flex items-center p-2 ml-10 justify-center flex-col'>
                    <div className='flex flex-row w-12 h-12 bg-gray-300 text-xl rounded-full items-center justify-center'>3</div>
                    <p className={`${darkMode ? 'text-white' : 'text-black'} font-bold`}>Proofs</p>
                 </div>
              </div>
         
              <div className=" p-0 items-center flex flex-col">

                 <div className="mt-10 mb-5 border-r flex items-center  w-full justify-center">
                    <Personalinfo />
                 </div>


                 <div className="mt-12 mb-5 border-r flex items-start  w-full ">
                    <Professionalinfo />
                 </div>

                 <div className="mt-12 mb-5 border-r flex items-center  w-full ">
                    <Proofs />
                 </div>

                 <div className="mt-12 mb-5 border-r flex items-center  w-full ">
                    <Medicalproof />
                 </div>

                 <div className='flex mb-3 items-center justify-center'>
                   
                    <button className={`${darkMode ? 'bg-black text-white border-white' : 'bg-lightcyan text-black border-black'} cursor-pointer  rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[40px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`} onClick={handleButtonClick}>Submit</button>
                 </div>

              </div>
          
            <Bottombar />
        </div>
    </div>
</main>
   
  )
}

export default Editprofile
