import React, { useEffect, useState } from 'react'
import InputForm6 from './InputForm6';
import InputForm7 from './InputForm7';

function InputForm5() {
  const [frameInput7Value, setFrameInput7Value] = useState();
  const storedDarkMode = localStorage.getItem('darkMode');
  const [showNewContainer, setShowNewContainer] = useState(false);
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleSaveButtonClick = () => {

    setShowNewContainer(!showNewContainer);
  };

    return (
      <div className="flex items-center justify-between w-[1130px] h-[105px] overflow-hidden mb-8">

        <div className="flex flex-col items-start justify-start w-[200px] h-[105px] overflow-hidden">
          <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Tax</div>
          <select
            className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none]  text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
            name="code"
            id="input"
            value={frameInput7Value}
            onChange={(event) => setFrameInput7Value(event.target.value)}
          >
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </select>
        </div>


        <div className="flex gap-4 items-end">
          <button
            className="cursor-pointer p-0 bg-black border-white rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"

            autoFocus={true}
            id="filterbut"
          >
            <div className="text-xl font-inter text-white">Cancel</div>
          </button>

          <button
            className="cursor-pointer p-0 bg-[#38B1BD]  rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
            onClick={handleSaveButtonClick}
            autoFocus={true}
            id="filterbut"
          >
            <div className="text-xl font-inter text-white">Save</div>
          </button>
        </div>


        {showNewContainer && (
          <section
            className="absolute top-[150px] left-[0px] w-[1148px] h-[1050px] overflow-hidden text-left text-xl text-black font-inter"
            id="input"
          >
            <InputForm7 />
            <InputForm6 />
          </section>
        )}
      </div>
  )
}

export default InputForm5
