import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import Icon from '@foundation-base/icon';

const GenerateCalendar: React.FC<{
  selectedDate?: string;
  startDate: Dayjs;
  onClick: (selectedDate: string) => void;
}> = (props) => {
  const selectedDate = dayjs(props.selectedDate);
  const dateCount = props.startDate.daysInMonth();
  const start = props.startDate;
  const end = props.startDate.add(dateCount - 1, 'day');

  return (
    <div className="grid grid-cols-7 justify-items-center">
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        S
      </div>
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        M
      </div>
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        T
      </div>
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        W
      </div>
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        T
      </div>
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        F
      </div>
      <div className="h-12 w-12 text-[#5655C6] font-bold flex justify-center items-center">
        S
      </div>
      {[...Array(start.day()).keys()].reverse().map((dateOffset) => {
        return (
          <button className="h-12 w-12 text-neutral-300 pointer-events-none">
            {start.subtract(dateOffset + 1, 'day').date()}
          </button>
        );
      })}
      {[...Array(dateCount).keys()].map((date) => {
        return (
          <button
            className={`h-12 w-12 rounded-full text-[#5655C6] ${
              start.add(date, 'day').format('DD-MM-YY') ===
              selectedDate.format('DD-MM-YY')
                ? 'bg-[#5655C6] text-white'
                : 'hover:bg-[#5655C626]'
            }`}
            onClick={() => props.onClick(start.add(date, 'day').toISOString())}
          >
            {date + 1}
          </button>
        );
      })}
      {[...Array(6 - end.day()).keys()].map((dateOffset) => {
        return (
          <button className="h-12 w-12 text-neutral-300 pointer-events-none">
            {end.add(dateOffset + 1, 'day').date()}
          </button>
        );
      })}
    </div>
  );
};

const DateSelector: React.FC<{
  selectedDate?: string;
  onClick: (selectedDate: string) => void;
}> = (props) => {
  const [monthStartDate, setMonthStartDate] = useState(
    dayjs(props.selectedDate).date(1)
  );

  return (
    <div className="p-3 w-[360px] bg-white flex flex-col gap-3 rounded-lg shadow-[0_6px_12px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center">
        <h2 className="ml-4 font-bold text-[#5655C5]">
          {monthStartDate.format('MMMM YYYY')}
        </h2>
        <div className="flex gap-2">
          <button
            className="p-3 transition-all cursor-pointer rounded-full flex items-center justify-center rotate-90 hover:border-[#5655C6] hover:bg-[#5655C626]"
            onClick={() =>
              setMonthStartDate(monthStartDate.subtract(1, 'month'))
            }
          >
            <Icon
              width="12px"
              height="12px"
              graphics="caretDown"
              color="#5655C6"
            />
          </button>
          <button
            className="p-3 transition-all cursor-pointer rounded-full flex items-center justify-center -rotate-90 hover:border-[#5655C6] hover:bg-[#5655C626]"
            onClick={() => setMonthStartDate(monthStartDate.add(1, 'month'))}
          >
            <Icon
              width="12px"
              height="12px"
              graphics="caretDown"
              color="#5655C6"
            />
          </button>
        </div>
      </div>
      <GenerateCalendar
        selectedDate={props.selectedDate}
        startDate={monthStartDate}
        onClick={props.onClick}
      />
    </div>
  );
};

export default DateSelector;
