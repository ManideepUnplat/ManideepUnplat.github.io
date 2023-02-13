import React from 'react'

function Head() {
  return (
    <div>
      <div className='bg-[#5655C6] py-6 pl-6 sticky top-0 z-50 flex justify-between items-center'>
          <p className='font-bold text-white text-md'>TIME.DEV for Outlook</p>
          <div className='p-3 cursor-pointer'>
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 0H27.5V3H0.5V0ZM0.5 7.5H27.5V10.5H0.5V7.5ZM0.5 15H27.5V18H0.5V15Z" fill="white"/>
            </svg>
          </div>
      </div>

      {/* <div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.16667 15.5C1.70833 15.5 1.31583 15.3369 0.989167 15.0108C0.663055 14.6842 0.5 14.2917 0.5 13.8333V2.16667C0.5 1.70833 0.663055 1.31583 0.989167 0.989167C1.31583 0.663055 1.70833 0.5 2.16667 0.5H8V2.16667H2.16667V13.8333H8V15.5H2.16667ZM11.3333 12.1667L10.1875 10.9583L12.3125 8.83333H5.5V7.16667H12.3125L10.1875 5.04167L11.3333 3.83333L15.5 8L11.3333 12.1667Z" fill="#7B7D85"/>
        </svg>
      </div> */}

    </div>
  )
}

export default Head