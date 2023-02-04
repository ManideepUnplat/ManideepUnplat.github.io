import React from 'react'
import PracticeTyping from '../icons/PracticeTyping'
import EmailShortcuts from '../icons/EmailShortcuts'

function PerformanceTools() {
  return (
    <div className='mt-12'>
      <p className='text-xl font-bold'>PERFORMANCE TOOLS</p>

      <div className="flex py-3 border-t-2 border-[black] font-bold">
        <p className='w-[314px]'></p>
        <p className='w-[78px] text-center'>You</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>Peers</p>
      </div>

      <div className="flex py-3">
        <p className='w-[314px] font-bold'>Average email typing speed:</p>
        <p className='w-[78px] text-center'>65 wpm</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>65 wpm</p>
      </div>

      <div className='flex justify-center items-center my-8'>
        <div className='flex flex-col items-center justify-center w-[200px]'>
          <PracticeTyping/>
          <p className='font-bold'>Practice typing</p>
        </div>

        <div className='flex flex-col items-center justify-center w-[200px]'>
          <EmailShortcuts/>
          <p className='font-bold'>Practice Email Shortcuts</p>
        </div>
      </div>

    </div>
  )
}

export default PerformanceTools