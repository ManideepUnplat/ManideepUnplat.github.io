import React, { useEffect } from 'react';
import TimeDev from '../images/timeDev.png';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Button from './common/Button';
import { TodoActions } from '../redux/actions';

function LoginPage(props: any) {
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector((state) => state);

  const login = async () => {
    var email: any;

    Office.onReady((info: any) => {
        console.log(Office.context.mailbox.userProfile.emailAddress)
      email = Office.context.mailbox.userProfile.emailAddress;
    });

    useEffect(() => {
      if (email) {
        dispatch(
          TodoActions.login(email, (e) => {
            console.log(e.data[0].userId);
            localStorage.setItem(
              'token',
              JSON.stringify({
                userId: e.data[0].userId
              })
            );
            props.setIsLoggedIn(true);
          })
        );
      }
    }, [email]);
  };

  return (
    <div>
      <br />
      <img src={TimeDev} alt="logo" className="w-[200px] block mx-auto" />
      <br />
      <br />

      <p className="text-center font-bold">Login to Time.Dev to add new task</p>

      <br />
      <div className="flex justify-center">
        <Button
          onClick={login}
          isPrimary
          label={'Login to Time.dev'}
          size={'sm'}
        />
      </div>

      <br />
      <br />
      <br />

      <div className="flex justify-center">
        <a href="" className="text-[#5655c6] text-center underline font-bold">
          About Time.Dev
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
