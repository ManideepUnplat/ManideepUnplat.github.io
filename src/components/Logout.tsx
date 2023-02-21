import React from 'react'
import { TodoActions } from '../redux/actions'
import { useAppDispatch } from '../redux/hooks'
import Button from './common/Button'

function Logout(props : any) {
    const dispatch = useAppDispatch()
  return (
    <div>
        <br/><br/>
        <p className='font-bold text-center'>Are you sure you want to logout?</p>
        <br/>
        <div className='flex justify-center'>
            <Button
                onClick={()=>{
                    localStorage.removeItem("token")
                    props.setIsLoggedIn(false)
                    dispatch(TodoActions.showLogout(false))
                }}
                label={'Logout'}
                size={'sm'}
            />
        </div>
    </div>
  )
}

export default Logout