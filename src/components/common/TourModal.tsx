import Button from '@foundation-base/button';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import dummyCalls from '../../images/dummyCalls.png';
/**
 * `COMPONENT`
 * ## Modal
 * @param props Contains the following attributes: `children`, `handleClose`
 * @returns `React.ReactElement`
 */
const TourModal = (props: { isOpen: boolean }): React.ReactPortal => {
  const [openAnimation, setOpenAnimation] = useState(false);
  const [visibility, setVisibility] = useState(1);
  useEffect(() => {
    setOpenAnimation(props.isOpen);
  }, [props.isOpen]);

  const twStyles = {
    backdrop: `transition ${
      openAnimation ? 'opacity-100' : 'opacity-0'
    } z-50 bg-[#000000BF] fixed flex min-h-screen min-w-screen top-0 left-0 right-0 bottom-0 overflow-y-auto p-8`,
    modal: `transition ${
      openAnimation ? 'scale-100' : 'scale-75'
    } min-h-[60px] min-w-[120px] m-auto relative bg-white rounded-lg overflow-hidden shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]`,
    close:
      'absolute top-[8px] right-[8px] p-2 cursor-pointer rounded-full transition hover:bg-[#5655C626]'
  };

  return ReactDOM.createPortal(
    props.isOpen && (
      <div className={twStyles.backdrop}>
        <div
          className="{twStyles.modal} w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-5">
            <div className="relative w-[70px] h-[160px] bg-white border-[1px] border-solid border-white">
              {visibility === 2 && (
                <div className="absolute bg-[#FA3E3E] w-full h-[64px] bottom-0"></div>
              )}
            </div>
            <div
              className={
                visibility === 1
                  ? 'text-white opacity-80 leading-[33px] text-2xl font-bold mt-auto'
                  : 'text-white opacity-80 leading-[33px] text-2xl font-bold mt-auto mb-16'
              }
            >
              {visibility === 1 ? '0' : '30'} minutes
            </div>
          </div>
          {visibility === 1 && (
            <div className="pr-[130px] pl-[130px] pt-[130px]">
              <div className="flex justify-center items-center">
                <img src={dummyCalls} alt="" className="block" />
              </div>
              <div className="ml-40">
                <svg
                  width="151"
                  height="178"
                  viewBox="0 0 151 178"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75.5 22.25L18.875 74.1667H50.2704L50.3333 155.75H100.667V74.1667H132.125L75.5 22.25Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="text-white opacity-80 leading-[33px] text-2xl font-bold flex justify-center items-center">
                Share custom calendar links for others to book time on your
                calendar*.
              </div>
              <div className="flex justify-end mt-5">
                <Button
                  onClick={() => {
                    setVisibility(2);
                  }}
                  label="Next"
                  styles={{
                    backgroundColor: 'white',
                    color: '#5655c6',
                    width: '175px'
                  }}
                />
              </div>
            </div>
          )}
          {visibility === 2 && (
            <div className="mt-[413px] px-[130px] pt-[130px]">
              <div className="text-white opacity-80 leading-[33px] text-2xl font-bold flex justify-center items-center">
                And the more you use custom calendar links, the more you rachet
                up!
              </div>
              <div className="flex justify-end mt-5">
                <Button
                  onClick={() => {
                    setOpenAnimation(false);
                  }}
                  label="Finish"
                  styles={{
                    backgroundColor: 'white',
                    color: '#5655c6',
                    width: '175px'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    document.getElementById('root') as Element
  );
};

export default TourModal;
