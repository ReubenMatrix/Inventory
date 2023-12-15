import React, { useEffect, useState } from 'react'

function InputForm3() {
  const [frameInput3Value, setFrameInput3Value] = useState();
  const [frameInput4Value, setFrameInput4Value] = useState();
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  return (
    <div className="flex items-start justify-between w-[1148px] h-[105px] overflow-hidden mb-8">
          <div className="flex flex-col items-start justify-start w-[409px] h-[105px] overflow-hidden">
              <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Stocking Unit</div>
              <input
                  className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none] text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
                  name="name"
                  id="input"
                  type="text"
                  value={frameInput3Value}
                  onChange={(event) => setFrameInput3Value(event.target.value)}
              />
          </div>


          <div className="flex flex-col  items-start justify-start w-[409px] h-[105px] overflow-hidden">
              <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Re-Order Level</div>
              <input
                  className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none] text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
                  name="code"
                  id="input"
                  type="text"
                  value={frameInput4Value}
                  onChange={(event) => setFrameInput4Value(event.target.value)}
              />
          </div>
      </div>
  )
}

export default InputForm3