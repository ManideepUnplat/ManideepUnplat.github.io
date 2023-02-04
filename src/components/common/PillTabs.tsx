import React from 'react';

const PillTabs: React.FC<{
  items: string[];
  onClick: (item: string, index: number) => void;
  activeIndex: number;
}> = (props) => {
  return (
    <div className="flex flex-row flex-nowrap text-[#5655C6] text-center font-bold bg-[#5655C626] rounded-full overflow-x-auto scroll scroll-light">
      {props.items.map((item, index) => (
        <button
          key={index}
          className={`min-w-[160px] px-[20px] py-[12px] rounded-full ${
            index === props.activeIndex && 'text-white bg-[#5655C6] font-bold'
          }`}
          onClick={() => props.onClick(item, index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default PillTabs;
