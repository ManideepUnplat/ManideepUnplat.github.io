import React from 'react'
import PracticeTyping from '../icons/PracticeTyping'
import EmailShortcuts from '../icons/EmailShortcuts'

function PerformanceTools() {
  return (
    <div className='mt-12'>
      <p className='font-bold text-md'>PERFORMANCE TOOLS</p>

      <div className="flex py-2 border-t-2 border-[black] font-bold">
        {/* <p className='w-[208px]'></p>
        <p className='w-[48px] text-center text-xs'>You</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>Peers</p> */}
      </div>

      {/* <div className="flex py-2">
        <p className='w-[208px] font-bold text-xs'>Average email typing speed:</p>
        <p className='w-[48px] text-center text-xs'>65 wpm</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>65 wpm</p>
      </div> */}

      <div className='flex justify-center items-center my-8'>
        <div className='flex flex-col items-center justify-center w-[200px]' onClick={()=>window.location.href="https://timedotdevdevelopmentstudent.web.app/widgets/typing-tiger/practice"}>
          <PracticeTyping/>
          <p className='font-bold text-xs'>Practice typing</p>
        </div>

        <div className='flex flex-col items-center justify-center w-[200px]' onClick={()=>window.location.href="https://timedotdevdevelopmentstudent.web.app/widgets/shortcut-shark/practice"}>
          <EmailShortcuts/>
          <p className='font-bold text-xs'>Practice Email Shortcuts</p>
        </div>
      </div>

    </div>
  )
}

export default PerformanceTools