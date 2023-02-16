import React from 'react';
import TimeDev from '../images/timeDev.png';
import Button from './common/Button';

function LoginPage(props: any) {
  const login = () => {
    localStorage.setItem(
      'token',
      '{"userId":101,"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZ2FuZ2lzaGV0dHlyaW5rdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImNvR3VnazhIOUkifSwiaWF0IjoxNjc1MjI5MTM4fQ.HyLMGRH9OXTfCS7gMfgBoXfU-uY0Xa_ielhTOIu8Nsk","gApiAccessToken":"ya29.a0AVvZVsrNBWcsiSKBZNwX1MoNH8uAuTtdEwMR5XshWXj2O3qoEQA2H6h_ykpTtxuk05GjfKQfJm1FA1kbDhoO-wQTfAcNlCRWbkzCQeUf2nvCVKSxDSLYawZdRQfNPg0R1FgivytTDqTVm37rKbpJxThNxVOAaCgYKAcgSARISFQGbdwaI1ufWqExAxtgsTFFKq9vlLg0163","gApiRefreshToken":"1//04vNGiB-5xcXnCgYIARAAGAQSNwF-L9IrZ-Lfunwp8UtmTrfyIGOjuZGC_Ztb2mi0rCAvi5TH6OE7xm6rgdCQBHyWMO4ECHZR3ug"}'
    );
    props.setIsLoggedIn(true);
    console.log(Office.context.mailbox.userProfile.emailAddress);
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
