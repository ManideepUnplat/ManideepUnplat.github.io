import React, { useEffect, useState } from 'react';
import AddToTodo from '../components/AddToTodo';
import CurrentEmail from '../components/CurrentEmail'
import EmailAdded from '../components/EmailAdded';
import EmailAnalytics from '../components/EmailAnalytics';
import Head from '../components/Head';
import LoginPage from '../components/LoginPage';
import Logout from '../components/Logout';
import PerformanceTools from '../components/PerformanceTools';
import { showLogout } from '../redux/actions/todo';
import { useAppSelector } from '../redux/hooks';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const reduxState = useAppSelector((state) => state.todo);

  useEffect(()=>{
    if(localStorage.getItem("token")!==null){
      setIsLoggedIn(true);
    }
  },[])


  useEffect(() => {
    const handleKeyDown = (event : any) => {
      if (event.ctrlKey && event.shiftKey && event.keyCode === 65) {
        console.log("pressed");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <div className={`${isLoggedIn?"w-[300px]":"w-[305px]"} mx-auto min-h-[100vh]`}>
      <Head isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {
        isLoggedIn?
        <>
        {
          reduxState.showLogout ? <Logout setIsLoggedIn={setIsLoggedIn}/>:
          <div className='p-3'>
            {
              reduxState.addedEmail ? <EmailAdded/> : <AddToTodo/>
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
