import React, { useEffect, useState } from 'react'
import { lsGetToken } from '../common-utils/helper'
import { TodoActions } from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

function ProjectSelect(props: any) {

    const dispatch = useAppDispatch()

    const workspaces = useAppSelector((state)=>state.todo.workspaces)

    const [isOpen,setIsopen] = useState(false)

    const [selectedOption,setSelectedOption] = useState("Select")

    useEffect(()=>{
        dispatch(TodoActions.getWorkspaces(lsGetToken().userId))
    },[])

    return (
        <div className='text-xs border w-[130px] mt-[3px] h-[20px] px-1 bg-white'>
            <div onClick={()=>setIsopen(!isOpen)} className="cursor-pointer h-[16px] truncate overflow-hidden flex justify-between items-center">
                <p>{selectedOption}</p>
                <svg className='fill-slate-500' width="10" height="7" viewBox="0 0 7 5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.697639 0.991142C0.934521 0.748827 1.26431 0.729812 1.55389 0.991142L3.67713 3.02691L5.80038 0.991142C6.08996 0.729812 6.42029 0.748827 6.65554 0.991142C6.89243 1.23291 6.87721 1.64148 6.65554 1.86858C6.43496 2.09569 4.10472 4.31455 4.10472 4.31455C3.98682 4.43571 3.83198 4.49656 3.67713 4.49656C3.52229 4.49656 3.36745 4.43571 3.24847 4.31455C3.24847 4.31455 0.919308 2.09569 0.697639 1.86858C0.475969 1.64148 0.460757 1.23291 0.697639 0.991142Z" fill="black"/>
                </svg>
            </div>
            <div className='absolute bg-white border border-slate-400 rounded'>
            {
                isOpen && <>
                    {
                        workspaces?.map((workspace: any,i: number)=><div key={i}>
                            <div className='pl-4 font-bold cursor-not-allowed'>
                                {workspace.workspaceTitle}
                            </div>
                            {
                                workspace?.projects?.map((project: any, j : number)=><div key={j}>
                                    <div className='pl-8 cursor-not-allowed pr-2'>
                                        {project.projectTitle}
                                    </div>
                                        {
                                        project?.sections?.map((section: any,k: number)=>
                                            <div className='pl-12 hover:bg-blue-400 hover:text-white cursor-pointer pr-2 flex' key={k} onClick={()=>{
                                                setSelectedOption(section.sectionTitle)
                                                props.onClick({
                                                    sectionId : section.sectionId,
                                                    projectId : project.projectId
                                                })
                                                setIsopen(!isOpen)
                                                }}>
                                                <svg className='mx-2' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 11.5H11.5063M1.5 11.5H1.50625M4 11.5H4.00625M6.5 11.5H6.50625M9 11.5H9.00625M11.5 1.5H11.5063M1.5 1.5H1.50625M4 1.5H4.00625M6.5 1.5H6.50625M1.5 4.625C1.5 4.45924 1.56585 4.30027 1.68306 4.18306C1.80027 4.06585 1.95924 4 2.125 4H10.875C11.0408 4 11.1997 4.06585 11.3169 4.18306C11.4342 4.30027 11.5 4.45924 11.5 4.625V8.375C11.5 8.54076 11.4342 8.69973 11.3169 8.81694C11.1997 8.93415 11.0408 9 10.875 9H2.125C1.95924 9 1.80027 8.93415 1.68306 8.81694C1.56585 8.69973 1.5 8.54076 1.5 8.375V4.625Z" stroke="#7B7D85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                {section.sectionTitle}
                                            </div>
                                        )
                                        }
                                    </div>
                                )
                            }
                        </div>)
                    }
                </>
            }
            </div>
        </div>
    )
}

export default ProjectSelect