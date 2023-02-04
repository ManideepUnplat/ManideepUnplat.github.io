import React, { useState } from 'react'
import DateSelector from './DateSelector'
import Calendar from '../icons/Calendar'
import Button from './common/Button'

function AddToTodo() {

  const [date,setDate] = useState(new Date().toISOString())
  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='text-[#000000]'>
      <p className='text-xl block font-bold mt-6'>ADD TO TODO</p>
      <div className="border border-[black]"></div>
      <p className='py-1 font-bold py-3'>Task Name</p>
      <p>Your NYT Summary for the day</p>

      <div className='border'></div>

      <div className="flex py-6 justify-between">
        <p>Due date</p>
        <div className='relative'>
          <div onClick={()=>setIsOpen(!isOpen)} className='w-[360px] border rounded p-2 flex flex-grow justify-end'>
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
          <p className='py-2'>Project</p>
          <select className='w-[200px] border' name="project" id='project'>
            <option value="one">one</option>
            <option value="two">two</option>
          </select>
        </div>

        <div>
          <p className='py-2'>Priority</p>
          <select className='w-[200px] border' name="priority" id='priority'>
            <option value="one">one</option>
            <option value="two">two</option>
          </select>
        </div>
      </div>

      <div className='flex items-center justify-center mt-8'>
        <Button twAddonStyles={{button : 'mx-auto' }} isPrimary label={'Add Task'} size={'md'}/>
      </div>

    </div>
  )
}

export default AddToTodo