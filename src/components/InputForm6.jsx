import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputForm7 from './InputForm7';

function InputForm6() {
    const [frameInput7Value, setFrameInput7Value] = useState();
    const [frameInput1Value, setFrameInput1Value] = useState();
    const storedDarkMode = localStorage.getItem('darkMode');
   const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
 
    
   const navigate = useNavigate();
   const handleButtonClick = () => {
     console.log("Button clicked!");
     navigate("/listitems");
   };
   
   useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
   }, [darkMode]);
  return (
      <div className="flex items-start justify-between w-[1148px] h-[1005px] overflow-hidden mb-8">
          <div className="flex flex-col items-start justify-start w-[409px] h-[105px] overflow-hidden">
              <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Type</div>
              <select
                  className="[outline:none] bg-white text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black"
                  name="code"
                  id="input"
                  value={frameInput7Value}
                  onChange={(event) => setFrameInput7Value(event.target.value)}
              >
                  <option value="" disabled selected>Ointment</option>
                  <option value="option1">Antibacterial Ointment</option>
                  <option value="option2">Antifungal Ointment</option>
                  <option value="option3">Topical Steroid Ointment</option>
                  <option value="option4">Wound Healing Ointment</option>
                  <option value="option5">Burn Ointment</option>
                  <option value="option6">Hemorroid Ointment</option>

              </select>
          </div>

          <div className="flex flex-col items-end justify-start w-[409px] h-[310px] overflow-hidden">
              <div className={`items-start mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Instructions</div>
              <textarea
                  className="[outline:none] bg-white text-xl  box-border w-full h-[830px]  border-[1px] border-solid border-black"
                  name="code"
                  id="input"
                  type="text"
                  value={frameInput1Value}
                  onChange={(event) => setFrameInput1Value(event.target.value)}
              />


              <div className="flex flex-col items-center gap-4 mt-10">
                  <div className="flex gap-4 justify-end items-end">
                      <button
                          className="cursor-pointer p-0 bg-black border-white rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"

                          autoFocus={true}
                          id="filterbut"
                      >
                          <div className="text-xl font-inter text-white">Cancel</div>
                      </button>

                      <button
                          className="cursor-pointer p-0 bg-[#38B1BD]  rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"

                          autoFocus={true}
                          id="filterbut"
                      >
                          <div className="text-xl font-inter text-white">Save</div>
                      </button>
                  </div>


                  <button
                      className="cursor-pointer p-0 bg-black border-white rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
                      autoFocus={true}
                      onClick={handleButtonClick}
                      id="filterbut"
                  >
                      <div className="text-xl font-inter text-white">Next</div>
                  </button>
              </div>
          </div>
      </div>

  )
}

export default InputForm6
