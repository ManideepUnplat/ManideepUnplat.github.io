import React, { useEffect, useState } from 'react'
import "office-js";

function CurrentEmail() {

  const [time,setTime] = useState("")
  const [words,setWords] = useState(0)

  // useEffect(()=>{
  //   Office.onReady((info: any) => {
  //     if (info.host === Office.HostType.Outlook) {

  //       setInterval(function () {
          
  //         if(Office.context.mailbox.item){
  //           Office.context.mailbox.item.body.getAsync("text", function (result : any) {
  //             if(result.value.trim().split(/\s+/)[0]=='')setWords(0)
  //             else setWords(result.value.trim().split(/\s+/).length)
  //           });

  //           console.log("Start:")

  //           Office.context.mailbox.item.saveAsync(
  //             function callback(result) {
  //               console.log("resultu",result)
  //               console.log(Office.context.mailbox.item.dateTimeModified);
  //           });         

  //         }

  //       }, 500);
  //     }
  //   });

  // },[])

  return (
    <div className='mt-12'>
      <p className='text-md font-bold'>CURRENT EMAIL</p>

      <div className="flex py-2 border-t-2 border-[black] font-bold">
        {/* <p className='w-[155px]'></p>
        <p className='w-[48px]'></p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>Average</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>Peers</p> */}
      </div>

      {/* <div className="flex py-2">
        <p className='w-[155px] font-bold text-xs'>Current time writing email:</p>
        <p className='w-[48px] font-bold text-center text-xs'>3 min</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>6 min</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>6 min</p>
      </div> */}

      <div className="flex py-2">
        <p className='w-[155px] font-bold text-xs'>Email word count:</p>
        <p className='w-[48px] font-bold text-center text-xs'>{words}</p>
        {/* <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>280</p>
        <p className='w-[48px] text-center text-[#CFCFCF] text-xs'>280</p> */}
      </div>

    </div>
  )
}

export default CurrentEmail