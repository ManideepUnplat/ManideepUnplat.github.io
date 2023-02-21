import React, { useEffect, useState } from 'react';
import AddToTodo from '../components/AddToTodo';
import CurrentEmail from '../components/CurrentEmail'
import EmailAdded from '../components/EmailAdded';
import EmailAnalytics from '../components/EmailAnalytics';
import Head from '../components/Head';
import LoginPage from '../components/LoginPage';
import Logout from '../components/Logout';
import PerformanceTools from '../components/PerformanceTools';
import { useAppSelector } from '../redux/hooks';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const reduxState = useAppSelector((state) => state.todo);

  useEffect(()=>{
    if(localStorage.getItem("token")!==null){
      setIsLoggedIn(true);
    }
  },[])

  return (
    <div className='w-[315px] min-h-[100vh] border-r-2'>
      <Head isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {
        isLoggedIn?
        <>
        {
          reduxState.showLogout ? <Logout setIsLoggedIn={setIsLoggedIn}/>:
          <div className='p-3'>
            {
              reduxState.addedTask ? <EmailAdded/> : <AddToTodo/>
            }
            <CurrentEmail/>
            {/* <EmailAnalytics/> */}
            <PerformanceTools/>
          </div>
        }
        </>:
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  );
}

export default App;
