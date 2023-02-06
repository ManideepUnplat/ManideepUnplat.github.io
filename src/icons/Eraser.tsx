import React from 'react'

function Eraser(props : any) {
  return (
    <svg className={props.className} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.375 25.222H15.3234L20.2171 20.3423L28.1765 12.3829C28.8043 11.7484 29.1564 10.8919 29.1564 9.9993C29.1564 9.10674 28.8043 8.2502 28.1765 7.6157L21.8062 1.24539C21.1735 0.614224 20.3163 0.259766 19.4226 0.259766C18.5289 0.259766 17.6717 0.614224 17.039 1.24539L9.07965 9.20477L1.12027 17.1641C0.489102 17.7968 0.134644 18.654 0.134644 19.5477C0.134644 20.4414 0.489102 21.2986 1.12027 21.9313L6.33746 27.1485C6.55177 27.3575 6.83972 27.4736 7.13902 27.472H27.375C27.6733 27.472 27.9595 27.3534 28.1705 27.1424C28.3814 26.9315 28.5 26.6453 28.5 26.347C28.5 26.0486 28.3814 25.7624 28.1705 25.5515C27.9595 25.3405 27.6733 25.222 27.375 25.222ZM18.6281 2.83445C18.8407 2.62743 19.1258 2.51159 19.4226 2.51159C19.7194 2.51159 20.0045 2.62743 20.2171 2.83445L26.5734 9.20477C26.6793 9.30824 26.7634 9.43182 26.8208 9.56827C26.8783 9.70471 26.9079 9.85126 26.9079 9.9993C26.9079 10.1473 26.8783 10.2939 26.8208 10.4303C26.7634 10.5668 26.6793 10.6904 26.5734 10.7938L19.4156 17.9516L11.4703 9.99227L18.6281 2.83445Z" fill="#5655C6"/>
    </svg>
  )
}

export default Eraser