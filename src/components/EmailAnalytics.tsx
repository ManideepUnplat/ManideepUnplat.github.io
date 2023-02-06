import React from 'react'

function EmailAnalytics() {
  return (
    <div className='mt-12'>
      <p className='text-md font-bold'>EMAIL ANALYTICS</p>

      <div className="flex py-2 border-t-2 border-[black] font-bold">
        <p className='w-[208px]'></p>
        <p className='w-[48px] text-center text-xs'>Average</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>Peers</p>
      </div>

      <div className="flex py-2">
        <p className='w-[208px] font-bold text-xs'>Emails written per day:</p>
        <p className='w-[48px] text-center text-xs'>10</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>10</p>
      </div>

      <div className="flex py-2">
        <p className='w-[208px] font-bold text-xs'>Time spent writing per email:</p>
        <p className='w-[48px] text-center text-xs'>6 mins</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>6 mins</p>
      </div>

      <div className="flex py-2">
        <p className='w-[208px] font-bold text-xs'>Total time spent writing email per day:</p>
        <p className='w-[48px] text-center text-xs'>280</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>280</p>
      </div>

    </div>
  )
}

export default EmailAnalytics