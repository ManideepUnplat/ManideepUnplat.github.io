import React from 'react';

const Icons = (props: {
  graphics: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const twStyles: { [key: string]: any } = {
    sm: 'h-2 w-2',
    md: 'h-5 w-5',
    lg: 'h-10 w-10',
    xl: 'h-15 w-15'
  };

  switch (props.graphics) {
    case 'loading':
      return (
        <svg
          className={`${twStyles[props.size || 'md']} animate-spin`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#loader_clip_path)">
            <path
              d="M8 1C8 0.447715 7.55056 -0.00644493 7.00258 0.0624094C5.58532 0.240494 4.235 0.795839 3.09674 1.67876C1.69389 2.76693 0.692864 4.29084 0.251335 6.01048C-0.190193 7.73012 -0.047142 9.54778 0.657963 11.1772C1.36307 12.8066 2.59016 14.1551 4.14597 15.0105C5.70178 15.8658 7.49791 16.1792 9.25147 15.9015C11.005 15.6238 12.6164 14.7706 13.8317 13.4764C15.0471 12.1822 15.7974 10.5204 15.9645 8.75287C16.1001 7.31872 15.8454 5.88103 15.2364 4.58898C15.0009 4.08941 14.3766 3.95329 13.9103 4.24921C13.444 4.54514 13.3147 5.16109 13.5291 5.67003C13.912 6.57868 14.0671 7.57279 13.9734 8.56465C13.8481 9.89031 13.2853 11.1366 12.3738 12.1073C11.4623 13.078 10.2538 13.7178 8.93861 13.9261C7.62343 14.1344 6.27634 13.8993 5.10948 13.2578C3.94262 12.6164 3.0223 11.6049 2.49347 10.3829C1.96464 9.16084 1.85735 7.79759 2.1885 6.50786C2.51965 5.21813 3.27041 4.0752 4.32256 3.25907C5.10978 2.64844 6.03224 2.24672 7.0046 2.08314C7.54923 1.99151 8 1.55229 8 1Z"
              fill={props.color || '#5655C6'}
            />
          </g>
          <defs>
            <clipPath id="loader_clip_path">
              <rect className={`${twStyles[props.size || 'md']} fill-white`} />
            </clipPath>
          </defs>
        </svg>
      );
    case 'tick':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeMiterlimit="10"
            strokeWidth="40"
          />
          <path
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
            d="M352 176L217.6 336 160 272"
          />
        </svg>
      );
    case 'info':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeMiterlimit="10"
            strokeWidth="40"
          />
          <path
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
            d="M220 220h32v116"
          />
          <path
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="40"
            d="M208 340h88"
          />
          <path
            fill={props.color || '#5655C6'}
            d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"
          />
        </svg>
      );
    case 'warning':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
          <path
            d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
          <path
            fill={props.color || '#5655C6'}
            d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"
          />
        </svg>
      );
    case 'cross':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeMiterlimit="10"
            strokeWidth="40"
          />
          <path
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
            d="M320 320L192 192M192 320l128-128"
          />
        </svg>
      );
    case 'eye-on':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="256"
            cy="256"
            r="80"
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>
      );
    case 'eye-off':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"
            fill={props.color || '#5655C6'}
          />
          <path
            d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"
            fill={props.color || '#5655C6'}
          />
        </svg>
      );
    case 'down':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 184l144 144 144-144"
          />
        </svg>
      );
    case 'tick-plain':
      return (
        <svg
          className={twStyles[props.size || 'md']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke={props.color || '#5655C6'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M416 128L192 384l-96-96"
          />
        </svg>
      );
    case 'add':
      return (
        <svg
          className={`${twStyles[props.size || 'md']}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke={props.color || 'currentColor'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M256 112v288M400 256H112"
          />
        </svg>
      );
  }
  return <div></div>;
};

export default Icons;
