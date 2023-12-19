import React, { useEffect, useState } from 'react';

function TwoFactor() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleEnableClick = () => {
    setIsEnabled(true);
  };

  const handleDisableClick = () => {
    setIsEnabled(false);
  };

  return (
    <div className='flex flex-row items-center'>
      <div className='flex flex-col mr-[70px]'>
        <div className='flex text-2xl font-bold leading-tight m-0'>
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} m-0`}>Two-Factor</h1>
        </div>
        <div className='flex text-2xl font-bold leading-tight m-0'>
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} m-0`}>Authentication</h1>
        </div>
        <div className='flex leading-tight m-0'>
          <p className={`${darkMode ? 'text-white' : 'text-black'}`}>
            Enable an extra layer of security for your account.
          </p>
        </div>
        <div className='flex mt-3'>
          <button
            className={`${
              darkMode
                ? 'bg-black text-white border-white'
                : 'bg-lightcyan text-black'
            } cursor-pointer mr-3 rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[130px] h-[52px] overflow-hidden border-[1px] border-solid  flex items-center justify-center`}
            onClick={handleDisableClick}
          >
            Disable
          </button>
          <button
            className={`${
              darkMode
                ? 'bg-white text-black'
                : 'bg-black text-white border-white'
            } cursor-pointer mr-3 rounded-[8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[140px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center`}
            onClick={handleEnableClick}
          >
            Enable
          </button>
        </div>
      </div>

      <div className='flex flex-1/2 w-full items-center'>
        <div className='flex flex-row mb-12 bg-white p-1 border-gray border-solid border-[1px] w-full'>
          <div className='flex w-20 h-20 p-2'>
            <img src='.\key.png' className='flex w-50 h-50' alt='Status' />
          </div>
          <div className='flex flex-col p-3 mr-12'>
            <div className='text-lg font-semibold'>Status</div>

            <div className={`text-gray-400 items-center justify-center text-sm mt-1 flex`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill={isEnabled ? '#0bcc66' : 'grey'}
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z'
                  clipRule='evenodd'
                />
                <rect x='8.25' y='8.25' width='7.5' height='7.5' fill={isEnabled ? '#0bcc66' : 'grey'} />
              </svg>
              <span className='m-0'>{isEnabled ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFactor;
