import React, { useEffect, useState } from 'react'

function InputForm4() {
    const [frameInput5Value, setFrameInput5Value] = useState();
    const [frameInput6Value, setFrameInput6Value] = useState();
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
    return (
        <div className="flex items-start justify-between w-[1148px] h-[105px] overflow-hidden mb-8">
            <div className="flex flex-col items-start justify-start w-[409px] h-[105px] overflow-hidden">
                <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Retail Price</div>
                <input
                    className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none]  text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
                    name="name"
                    id="input"
                    type="number"
                    value={frameInput5Value}
                    onChange={(event) => setFrameInput5Value(event.target.value)}
                />
            </div>


            <div className="flex flex-col items-start justify-start w-[409px] h-[105px] overflow-hidden">
                <div className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Item type</div>
                <select
                    className={`${darkMode ? 'bg-gray-200' : 'bg-white'} [outline:none]  text-xl rounded-md box-border w-full h-[62px] overflow-hidden border-[1px] border-solid border-black`}
                    name="code"
                    id="input"
                    value={frameInput6Value}
                    onChange={(event) => setFrameInput6Value(event.target.value)}
                >
                    <option value="" disabled selected>Select an item type</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
 
  )
}

export default InputForm4