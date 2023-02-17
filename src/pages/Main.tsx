import React, { useEffect, useState } from 'react';
import AddToTodo from '../components/AddToTodo';
import CurrentEmail from '../components/CurrentEmail'
import EmailAnalytics from '../components/EmailAnalytics';
import Head from '../components/Head';
import LoginPage from '../components/LoginPage';
import PerformanceTools from '../components/PerformanceTools';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

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
          <div className='p-3'>
            <AddToTodo/>
            <CurrentEmail/>
            {/* <EmailAnalytics/> */}
            <PerformanceTools/>
          </div>
        </>:
        <>
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </>
      }
    </div>
  );
}

export default App;
