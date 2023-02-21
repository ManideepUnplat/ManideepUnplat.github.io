import React, { useEffect, useState } from 'react'
import DateSelector from './DateSelector'
import Calendar from '../icons/Calendar'
import Button from './common/Button'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { TodoActions } from '../redux/actions'
import { lsGetToken } from '../common-utils/helper'

function AddToTodo() {

  const dispatch = useAppDispatch();

  const reduxStateTodo = useAppSelector((state)=>state.todo)

  const [date,setDate] = useState(new Date().toISOString())
  const [project,setProject] = useState("select")
  const [priority,setPriority] = useState("select")
  const [name,setName] = useState("")

  const [isOpen,setIsOpen] = useState(false)

  useEffect(()=>{
    dispatch(TodoActions.getProjects(lsGetToken().userId))

    Office.onReady((info: any) => {
      if (info.host === Office.HostType.Outlook) {
          if(Office.context.mailbox.item){
            Office.context.mailbox.item.subject.getAsync((result)=>setName(result.value));
          }
      }
    });

  },[])

  function addTodo(){
    if(project!="select" && priority!="select" && name!=""){
      dispatch(TodoActions.postProject({
        userId: lsGetToken().userId,
        todoTitle: name,
        projectId: project,
        priority: priority,
        dueDate: date.split("T")[0]+" "+date.split("T")[1]
      },()=>{
        setDate(new Date().toISOString())
        setProject("")
        setPriority("")
        setName("")
        dispatch(TodoActions.addedEmail(true))
      }))
    }
  }

  return (
    <div className='text-[#000000]'>
      <p className='block font-bold mt-6 text-md'>ADD TO TODO</p>
      <div className="border border-[black]"></div>
      <p className='py-1 font-bold text-xs'>Task Name</p>

      <input onChange={(e)=>setName(e.target.value)} value={name} className='text-xs w-full focus:outline-none'/>

      <div className='border'></div>

      <div className="flex py-5 items-center justify-between">
        <p className='text-xs'>Due date</p>
        <div className='relative'>
          <div onClick={()=>setIsOpen(!isOpen)} className='w-[220px] border rounded p-1 flex flex-grow justify-end'>
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
          <select value={project} className='w-[130px] border text-xs' name="project" id='project' onChange={(e)=>setProject(e.target.value)}>
            <option value="select">Select</option>
            {
              reduxStateTodo?.todos?.map((e: any, i: number)=>
                <option value={e.projectId} key={i}>{e.projectTitle}</option>
              )
            }
          </select>
        </div>

        <div>
          <p className='py-1 text-xs'>Priority</p>
          <select value={priority} className='w-[130px] border text-xs' name="priority" id='priority' onChange={(e)=>setPriority(e.target.value)}>
            <option value="select">Select</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div className='flex items-center justify-center mt-8'>
        <Button onClick={()=>addTodo()} twAddonStyles={{button : 'mx-auto' }} isPrimary label={'Add Task'} size={'sm'}/>
      </div>

    </div>
  )
}

export default AddToTodo