import React, { useEffect, useState } from 'react';

function Notifications() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(false);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleEmailNotifications = () => {
    setEmailNotificationsEnabled((prev) => !prev);
  };

  const togglePushNotifications = () => {
    setPushNotificationsEnabled((prev) => !prev);
  };

  return (
    <div className='flex flex-row items-center'>
      <div className='flex flex-col mr-[70px]'>
        <div className='flex text-2xl font-bold leading-tight m-0'>
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} m-0`}>Notifications Settings</h1>
        </div>
        <div className='flex leading-tight m-0'>
          <p className={`${darkMode ? 'text-white' : 'text-black'} w-[265px] m-0`}>Customize your notification preferences.</p>
        </div>
      </div>

      <div className='flex flex-1/2 flex-col w-full items-center'>
        <div className='flex flex-row mb-10 bg-white p-1 border-gray border-solid border-[1px] w-full'>
          <div className='flex w-20 h-20 p-2'>
            <img src='https://wallpapercave.com/wp/wp3429906.png' className='flex w-20 h-50' alt='Email Notifications' />
          </div>
          <div className='flex flex-col items-start p-2 mr-12'>
            <div className='font-semibold'>Email Notifications</div>
            <p className='text-black text-sm bg-gray-300 mt-0.5 mb-2 '>Primary</p>
            <div className='text-gray-400 text-sm flex items-center justify-center cursor-pointer' onClick={toggleEmailNotifications}>
              {emailNotificationsEnabled ? (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#0bcc66' className='w-5 ml-0 h-5'>
                  <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z' clipRule='evenodd' />
                  <rect x='8.25' y='8.25' width='7.5' height='7.5' fill='#0bcc66' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='grey' className='w-5 ml-0 h-5'>
                  <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z' clipRule='evenodd' />
                  <rect x='8.25' y='8.25' width='7.5' height='7.5' fill='grey' />
                </svg>
              )}
              {emailNotificationsEnabled ? 'Enabled' : 'Disabled'}
            </div>
          </div>
        </div>

        <div className='flex flex-row bg-white p-1 border-gray border-solid border-[1px] w-full'>
          <div className='flex w-20 h-20 p-2'>
            <img src='https://wallpapercave.com/wp/wp3429906.png' className='flex w-20 h-50'  />
          </div>
          <div className='flex flex-col p-2 items-start mr-1'>
            <div className='flex flex-col'>
              <div className='font-semibold'>Push Notifications</div>
            </div>
            <div className='flex flex-col'>
              <p className='text-black text-sm bg-gray-300 mt-0.5 mb-2 '>Secondary</p>
            </div>
            <div className='text-gray-400 text-sm flex items-center justify-center cursor-pointer' onClick={togglePushNotifications}>
              {pushNotificationsEnabled ? (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill="#0bcc66" className='w-5 ml-0 h-5'>
                  <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z' clipRule='evenodd' />
                  <rect x='8.25' y='8.25' width='7.5' height='7.5' fill='#0bcc66' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='grey' className='w-5 ml-0 h-5'>
                  <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z' clipRule='evenodd' />
                  <rect x='8.25' y='8.25' width='7.5' height='7.5' fill='grey' />
                </svg>
              )}
              {pushNotificationsEnabled ? 'Enabled' : 'Disabled'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;



