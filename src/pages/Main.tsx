import React from 'react';
import AddToTodo from '../components/AddToTodo';
import CurrentEmail from '../components/CurrentEmail'
import EmailAnalytics from '../components/EmailAnalytics';
import Head from '../components/Head';
import PerformanceTools from '../components/PerformanceTools';

function App() {

  return (
    <div className='w-[305px] border-r-2'>
      <Head/>
      <div className='p-3'>
        <AddToTodo/>
        <CurrentEmail/>
        <EmailAnalytics/>
        <PerformanceTools/>
      </div>
    </div>
  );
}

export default App;
