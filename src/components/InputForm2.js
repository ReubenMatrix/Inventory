import React, { useEffect, useState } from 'react'

function InputForm2() {
    const [frameInput2Value, setFrameInput2Value] = useState();
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
    
  return (
      <div className="flex items-start  justify-between w-[1148px] h-[105px] overflow-hidden mb-8">
          <div className="flex flex-col  w-[780px] h-[120px] overflow-hidden relative">
              <div className={` ${darkMode ? 'text-white' : 'text-black'} text-lg font-inter mb-2`}>
                  Manufacturer
              </div>

              <div className="flex items-center w-[780px] h-[62px] overflow-hidden">
                  <input
                      className={`${darkMode ? 'bg-gray-200' : 'bg-white'} outline-none bg-white text-xl rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md box-border w-[409px] h-[62px] overflow-hidden border-[1px] border-solid border-black ml-0`}
                      name="manufacture"
                      id="input"
                      type="text"
                      value={frameInput2Value}
                      onChange={(event) => setFrameInput2Value(event.target.value)}
                  />

                  <button
                      className="cursor-pointer p-0  bg-[#38B1BD]  rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[250px] h-[60px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
                      autoFocus={true}
                      id="filterbut"
                  >
                      <div className="text-xl font-inter text-white">
                          Save Manufacturer
                      </div>
                  </button>

                  <button
                      className="cursor-pointer p-0 bg-white rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
                      autoFocus={true}
                      id="filterbut"
                  >
                      <div className="text-xl font-inter text-teal-800">
                          Cancel
                      </div>
                  </button>
              </div>
          </div>
      </div>


   )
}

export default InputForm2