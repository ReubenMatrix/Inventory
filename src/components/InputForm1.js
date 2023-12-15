import React, { useEffect, useState } from 'react'

function InputForm1() {
    const [frameInputValue, setFrameInputValue] = useState();
    const [frameInput1Value, setFrameInput1Value] = useState();
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
    
  return (
      <div className="flex items-start justify-between w-[1148px] h-[105px] overflow-hidden mb-8">
          <div className="flex flex-col items-start justify-start w-[409px] h-[105px] overflow-hidden">
              <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Item Name</div>
              <input
                  className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none]  text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
                  name="name"
                  id="input"
                  type="text"
                  value={frameInputValue}
                  onChange={(event) => setFrameInputValue(event.target.value)}
              />
          </div>


          <div className="flex flex-col items-start justify-start w-[409px] h-[105px] overflow-hidden">
              <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Item Code</div>
              <input
                  className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none] text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
                  name="code"
                  id="input"
                  type="number"
                  value={frameInput1Value}
                  onChange={(event) => setFrameInput1Value(event.target.value)}
              />
          </div>


          
      </div>
  )
}

export default InputForm1