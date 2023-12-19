import React from 'react'

function Plans() {
  return (
      <div className='flex flex-col '>
          <div className='flex flex-row items-start mb-12 bg-white p-1 border-gray border-solid border-[1px] w-100 h-100'>
              <div className='flex w-20 h-20 p-2'>
                  <img src='.\smile.png' className='flex w-50 h-50' />
              </div>
              <div className='flex flex-col p-3 mr-12'>
                  <div className='flex font-semibold'>
                      Plan 1
                  </div>
                  <div className='flex text-sm text-gray-400 mt-1'>
                      Standard Plan
                  </div>
                  <div className='flex mt-2'>
                      $19.99/month
                  </div>
                  <div className='flex'>
                      <button className='bg-green-500 cursor-pointer mt-2 text-white'>
                          Active
                      </button>
                  </div>
                  <div className='flex text-sm mt-3 justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z" clipRule="evenodd" />
                          <rect x="8.25" y="8.25" width="7.5" height="7.5" fill="light-green" />
                      </svg>
                      Expires on 23/11/2004
                  </div>
              </div>
          </div>

          <div className='flex flex-row p-2 bg-white border-gray border-solid border-[1px] w-100 h-100'>
              <div className='flex w-20 h-20 p-2'>
                  <img src='.\mouth.png' className='flex w-50 h-50' />
              </div>
              <div className='flex flex-col p-3 mr-12'>
                  <div className='flex font-semibold'>
                      Plan 2
                  </div>
                  <div className='flex text-sm text-gray-400 mt-1'>
                      Premium Plan
                  </div>
                  <div className='flex mt-2'>
                      $29.99/month
                  </div>
                  <div className='flex'>
                      <button className='bg-gray-200 cursor-pointer mt-2 text-black'>
                          Upgrade available
                      </button>
                  </div>
                  <div className='flex text-sm mt-3'>
                      Not applied
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Plans
