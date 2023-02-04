import React, { useEffect, useState } from 'react';
import Icons from './Icons';

const Dropdown: React.FC<{
  id: string;
  placeholder: string;
  options: string[];
  optionCount: number;
  activeIndex?: number;
  onClick: (e: any) => void;
}> = (props) => {
  const [activeOption, setActiveOption] = useState<number>();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (
      (props.activeIndex || props.activeIndex === 0) &&
      props.activeIndex !== -1
    ) {
      setActiveOption(props.activeIndex);
    }
  }, [props.activeIndex]);

  const onOptionClick = (e: any, index: number) => {
    setActiveOption(index);
    props.onClick(e);
    setDropdown(false);
  };

  return (
    <div
      className="relative p-2 w-full flex items-center rounded-lg border border-[#D0D0D0] cursor-pointer"
      tabIndex={0}
      onMouseDown={() => setDropdown(true)}
      onKeyDown={(e: any) => e.keyCode === 13 && setDropdown(true)}
      onBlur={(e: any) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setDropdown(false);
        }
      }}
    >
      <div
        className={`${
          activeOption === undefined && 'text-neutral-500'
        } grow cursor-pointer`}
      >
        {activeOption !== undefined
          ? props.options[activeOption]
          : props.placeholder}
      </div>
      <Icons graphics="down" size="md" color="#5655C6" />

      {dropdown && (
        <ul
          className="absolute z-50 top-full right-0 w-full p-1 mt-1 shadow-[0px_8px_16px_#00000045] bg-white rounded-lg overflow-y-auto scroll scroll-dark"
          style={{ maxHeight: `${props.optionCount * 40}px` }}
        >
          {props.options.map((option, index) => {
            return (
              <button
                id={props.id}
                key={index}
                tabIndex={0}
                className={`${
                  index === activeOption &&
                  'bg-[#5655C626] box-border border border-[#5655C63D] text-[#5655C6] font-bold'
                } p-2 flex justify-between w-full text-sm text-left rounded hover:bg-[#5655C626] cursor-pointer`}
                onClick={(e: any) => onOptionClick(e, index)}
                onKeyDown={(e: any) =>
                  e.keyCode === 13 && onOptionClick(e, index)
                }
                value={option}
              >
                {option}
                {index === activeOption && (
                  <Icons graphics="tick-plain" size="md" color="#5655C6" />
                )}
              </button>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
