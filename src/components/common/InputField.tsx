import React, { useState } from 'react';
import Icons from './Icons';

const InputField = (props: {
  id: string;
  type: 'text' | 'email' | 'number' | 'password';
  value: string;
  onChange: (id: string, value: any) => void;
  label?: string;
  sideLabel?: string;
  placeholder?: string;
  suggestions?: string[];
  isValid?: boolean;
  isError?: boolean;
  showValidIcon?: boolean;
  showErrorIcon?: boolean;
  message?: string;
  isNotRounded?: boolean;
  isBordered?: boolean;
  showTick?: boolean;
}): React.ReactElement => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [viewPwd, setViewPwd] = useState(false);

  const twInputStyles = {
    input: 'outline-none h-10 w-full p-2',
    clipperDefault: `flex overflow-hidden border border-[#D0D0D0] flex items-stretch pr-2 ${
      !props.isNotRounded ? 'rounded-lg' : ''
    }`,
    bordered: 'rounded-lg border-2 border-[#5655C6]',
    clipperValid:
      'flex rounded-lg overflow-hidden border border-green-500 flex items-stretch pr-2',
    clipperError:
      'flex rounded-lg overflow-hidden border border-red-500 flex items-stretch pr-2',
    label: 'block mb-2 text-sm font-bold',
    sideLabel:
      'flex px-2 items-center bg-[#F8F8F8] border-r border-[#D0D0D0] text-sm text-[#888888] font-bold',
    iconValid:
      'absolute stroke-green-500 right-2 top-1/2 -translate-y-1/2 w-6 h-6',
    iconError:
      'absolute stroke-red-500 right-2 top-1/2 -translate-y-1/2 w-6 h-6',
    iconView: 'absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6',
    suggestionContainer:
      'absolute mt-1 z-20 top-full right-0 left-0 overflow-hidden bg-white border border-[#D0D0D0] rounded-lg shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]',
    suggestionList: 'flex flex-col max-h-[176px] overflow-y-auto',
    suggestionOption:
      'm-1 px-4 py-2 text-sm cursor-pointer rounded transition duration-300 ease-[cubic-bezier(0,0.4,0.2,1)] hover:bg-[#5655C626] hover:text-[#5655C6]',
    msgDefault: 'text-xs text-[#888888]',
    msgError: 'text-xs text-red-500',
    tickMark:
      'absolute stroke-[#5655C6] right-2 top-1/2 -translate-y-1/2 w-6 h-6'
  };

  return (
    <div className="w-full">
      {/* LABEL */}
      <label htmlFor={props.id} className={twInputStyles.label}>
        {props.label}
      </label>

      {/* WRAPPER */}
      <div className={`relative ${props.isBordered && twInputStyles.bordered}`}>
        {/* CLIPPER */}
        <div
          className={
            props.isError
              ? twInputStyles.clipperError
              : props.isValid
              ? twInputStyles.clipperValid
              : twInputStyles.clipperDefault
          }
        >
          {/* SIDE LABEL */}
          {props.sideLabel && (
            <div className={twInputStyles.sideLabel}>{props.sideLabel}</div>
          )}
          {/* INPUT FIELD */}
          <input
            className={twInputStyles.input}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            type={
              props.type !== 'password'
                ? props.type
                : viewPwd
                ? 'text'
                : 'password'
            }
            onChange={(e: any) => props.onChange(props.id, e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            autoComplete="off"
          />
          {/* ICON ERROR (Absolutely positioned to the Wrapper) */}
          {props.isError && props.showErrorIcon && (
            <svg
              className={twInputStyles.iconError}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          )}
          {/* ICON VALID (Absolutely positioned to the Wrapper) */}
          {props.isValid && props.showValidIcon && (
            <svg
              className={twInputStyles.iconValid}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="none" strokeWidth="32" d="M416 128L192 384l-96-96" />
            </svg>
          )}

          {props.showTick && (
            <svg
              className={twInputStyles.tickMark}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="none" strokeWidth="32" d="M416 128L192 384l-96-96" />
            </svg>
          )}

          {props.type === 'password' && (
            <div
              onClick={() => setViewPwd(!viewPwd)}
              className="flex items-center cursor-pointer"
            >
              <Icons graphics={viewPwd ? 'eye-off' : 'eye-on'} size="md" />
            </div>
          )}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM189.8 123.5L235.8 159.5C258.3 139.9 287.8 128 320 128C390.7 128 448 185.3 448 256C448 277.2 442.9 297.1 433.8 314.7L487.6 356.9C521.1 322.8 545.9 283.1 558.6 256C544.1 225.1 518.4 183.5 479.9 147.7C438.8 109.6 385.2 79.1 320 79.1C269.5 79.1 225.1 97.73 189.8 123.5L189.8 123.5zM394.9 284.2C398.2 275.4 400 265.9 400 255.1C400 211.8 364.2 175.1 320 175.1C319.3 175.1 318.7 176 317.1 176C319.3 181.1 320 186.5 320 191.1C320 202.2 317.6 211.8 313.4 220.3L394.9 284.2zM404.3 414.5L446.2 447.5C409.9 467.1 367.8 480 320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L120.8 191.2C102.1 214.5 89.76 237.6 81.45 255.1C95.02 286 121.6 328.5 160.1 364.3C201.2 402.4 254.8 432 320 432C350.7 432 378.8 425.4 404.3 414.5H404.3zM192 255.1C192 253.1 192.1 250.3 192.3 247.5L248.4 291.7C258.9 312.8 278.5 328.6 302 333.1L358.2 378.2C346.1 381.1 333.3 384 319.1 384C249.3 384 191.1 326.7 191.1 255.1H192z"/></svg> */}

          {/* SUGGESTION LIST/DROPDOWN (Absolutely positioned to the Wrapper) */}
          {props.value !== '' && props.suggestions && showSuggestions && (
            <div className={twInputStyles.suggestionContainer}>
              <div className={twInputStyles.suggestionList}>
                {props.suggestions
                  .map((value, key) => ({ key, value }))
                  .filter((suggestion) =>
                    suggestion.value
                      .toLowerCase()
                      .includes(props.value.toLowerCase())
                  )
                  .map((suggestion) => (
                    <div
                      key={suggestion.key}
                      className={twInputStyles.suggestionOption}
                      onMouseDown={() => {
                        props.onChange(props.id, suggestion.value);
                      }}
                    >
                      {suggestion.value}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MESSAGE */}
      <span
        className={
          props.isError ? twInputStyles.msgError : twInputStyles.msgDefault
        }
      >
        {props.message}
      </span>
    </div>
  );
};

export default InputField;
