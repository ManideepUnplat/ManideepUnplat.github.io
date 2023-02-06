import React from 'react'

function CurrentEmail() {
  return (
    <div className='mt-12'>
      <p className='text-md font-bold'>CURRENT EMAIL</p>

      <div className="flex py-2 border-t-2 border-[black] font-bold">
        <p className='w-[160px]'></p>
        <p className='w-[53px]'></p>
        <p className='w-[53px] text-center text-[#CFCFCF] text-xs'>Average</p>
        <p className='w-[53px] text-center text-[#CFCFCF] text-xs'>Peers</p>
      </div>

      <div className="flex py-2">
        <p className='w-[160px] font-bold text-xs'>Current time writing email:</p>
        <p className='w-[53px] font-bold text-center text-xs'>3 min</p>
        <p className='w-[53px] text-center text-[#CFCFCF] text-xs'>6 min</p>
        <p className='w-[53px] text-center text-[#CFCFCF] text-xs'>6 min</p>
      </div>

      <div className="flex py-2">
        <p className='w-[160px] font-bold text-xs'>Email word count:</p>
        <p className='w-[53px] font-bold text-center text-xs'>260</p>
        <p className='w-[53px] text-center text-[#CFCFCF] text-xs'>280</p>
        <p className='w-[53px] text-center text-[#CFCFCF] text-xs'>280</p>
      </div>

    </div>
  )
}

export default CurrentEmail