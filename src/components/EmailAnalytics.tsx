import React from 'react'

function EmailAnalytics() {
  return (
    <div className='mt-12'>
      <p className='text-xl font-bold'>EMAIL ANALYTICS</p>

      <div className="flex py-3 border-t-2 border-[black] font-bold">
        <p className='w-[314px]'></p>
        <p className='w-[78px] text-center'>Average</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>Peers</p>
      </div>

      <div className="flex py-3">
        <p className='w-[314px] font-bold'>Emails written per day:</p>
        <p className='w-[78px] text-center'>10</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>10</p>
      </div>

      <div className="flex py-3">
        <p className='w-[314px] font-bold'>Time spent writing per email:</p>
        <p className='w-[78px] text-center'>6 mins</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>6 mins</p>
      </div>

      <div className="flex py-3">
        <p className='w-[314px] font-bold'>Total time spent writing email per day:</p>
        <p className='w-[78px] text-center'>280</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>280</p>
      </div>

    </div>
  )
}

export default EmailAnalytics