import React, { useState } from 'react'
import DateSelector from './DateSelector'
import Calendar from '../icons/Calendar'
import Button from './common/Button'

function AddToTodo() {

  const [date,setDate] = useState(new Date().toISOString())
  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='text-[#000000]'>
      <p className='block font-bold mt-6 text-md'>ADD TO TODO</p>
      <div className="border border-[black]"></div>
      <p className='py-1 font-bold py-3 text-xs'>Task Name</p>
      <p className='text-xs'>Your NYT Summary for the day</p>

      <div className='border'></div>

      <div className="flex py-5 items-center justify-between">
        <p className='text-xs'>Due date</p>
        <div className='relative'>
          <div onClick={()=>setIsOpen(!isOpen)} className='w-[220px] border rounded p-2 flex flex-grow justify-end'>
            <Calendar/>
          </div>
          {
            isOpen&&
            <div className='absolute'>
              <DateSelector selectedDate={date} onClick={(s)=>setDate(s)}/>
            </div>
          }
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className='py-1 text-xs'>Project</p>
          <select className='w-[136px] border' name="project" id='project'>
            <option value="one">one</option>
            <option value="two">two</option>
          </select>
        </div>

        <div>
          <p className='py-1 text-xs'>Priority</p>
          <select className='w-[136px] border' name="priority" id='priority'>
            <option value="one">one</option>
            <option value="two">two</option>
          </select>
        </div>
      </div>

      <div className='flex items-center justify-center mt-8'>
        <Button twAddonStyles={{button : 'mx-auto' }} isPrimary label={'Add Task'} size={'sm'}/>
      </div>

    </div>
  )
}

export default AddToTodo