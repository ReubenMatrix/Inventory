import React, { useEffect, useState } from 'react'
import Subscribebar from '../components/Subscribebar'
import Bottombar from '../components/Bottombar'
import Sidebar from '../components/Sidebar'
import AccountsSettings from '../components/AccountsSettings'
import TwoFactor from '../components/TwoFactor'
import Notifications from '../components/Notifications'
import Deleteaccount from '../components/Deleteaccount'
import SettingsSidebar from '../components/SettingsSidebar'

function AccountSettings() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <main className={`${darkMode ? 'bg-black' : 'bg-lightcyan'}`}>
      <div className="flex flex-row">
        <SettingsSidebar />

        <div className='flex p-1 flex-col font-inter'>
          <div className=" p-2  items-start flex flex-col">
            <div className=" mt-5  mb-5 items-center border-r w-full justify-center">
              <AccountsSettings />
            </div>


            <div className=" mt-10 mb-5 border-r flex items-center  w-full justify-center">
              <TwoFactor />
            </div>

            <div className=" mt-10  mb-5 border-r flex items-center  w-full justify-center">
              <Notifications />
            </div>

            <div className=" mt-10  mb-5 border-r flex items-center  w-full justify-center">
              <Deleteaccount />
            </div>

          </div>

          <Bottombar />
        </div>
      </div>
    </main>

  )
}

export default AccountSettings
