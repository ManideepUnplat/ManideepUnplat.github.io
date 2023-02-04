import React from 'react'

function CurrentEmail() {
  return (
    <div className='mt-12'>
      <p className='text-xl font-bold'>CURRENT EMAIL</p>

      <div className="flex py-3 border-t-2 border-[black] font-bold">
        <p className='w-[236px]'></p>
        <p className='w-[78px]'></p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>Average</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>Peers</p>
      </div>

      <div className="flex py-3">
        <p className='w-[236px] font-bold'>Current time writing email:</p>
        <p className='w-[78px] font-bold text-center'>3 min</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>6 min</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>6 min</p>
      </div>

      <div className="flex py-3">
        <p className='w-[236px] font-bold'>Email word count:</p>
        <p className='w-[78px] font-bold text-center'>260</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>280</p>
        <p className='w-[78px] text-center text-[#CFCFCF]'>280</p>
      </div>

    </div>
  )
}

export default CurrentEmail