import React from 'react';

const Tabs: React.FC<{
  items: string[];
  onClick: (item: string, index: number) => void;
  activeIndex: number;
  edgeContent?: React.ReactNode;
}> = (props) => {
  return (
    <div className="flex flex-row flex-nowrap overflow-x-auto scroll scroll-light">
      {props.items.map((item, index) => (
        <button
          key={index}
          className={`shrink-0 px-[24px] py-[16px] ${
            index === props.activeIndex
              ? 'border-b-[2px] border-b-[#5655C6] font-bold'
              : 'border-b-[1px] border-b-neutral-300'
          }`}
          onClick={() => props.onClick(item, index)}
        >
          {item}
        </button>
      ))}
      <div className="pl-2 grow shrink-0 border-b-[1px] border-b-neutral-300">
        {props.edgeContent}
      </div>
    </div>
  );
};

export default Tabs;
