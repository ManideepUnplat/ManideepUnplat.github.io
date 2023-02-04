import React, { useState } from 'react';

import Icons from './Icons';

const SLIDE_WIDTH = 340;
const OFFSET_WIDTH = 340 + 16;
const TRACK_WIDTH_MINIMUM = 340 + 16 + 64;
const TRACK_WIDTH_MAXIMUM = TRACK_WIDTH_MINIMUM * 3 + 64;

const Carousel: React.FC<{
  slides: React.ReactNode[];
  loop?: boolean;
}> = (props) => {
  const twStyles = {
    container: `relative`,
    button: {
      left: 'absolute z-30 top-1/2 right-full translate-x-1/2 -translate-y-1/2 h-10 w-10 flex justify-center items-center cursor-pointer bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.32)] rounded-full',
      right:
        'absolute z-30 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 h-10 w-10 flex justify-center items-center cursor-pointer bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.32)] rounded-full'
    },
    slider: {
      container: 'px-8 py-4 overflow-x-hidden',
      track: 'flex items-center transition',
      item: `mx-2 bg-white rounded-lg shadow-[0px_4px_8px_rgba(0,0,0,0.32)]`,
      end: `mx-2 px-8 self-stretch transition bg-[#00000026] rounded-lg`
    }
  };

  const [offset, setOffset] = useState(0);

  const moveTrack = (direction: 'LEFT' | 'RIGHT') => {
    const rightBoundary = 0;
    const leftBoundary = -((props.slides.length - 1) * OFFSET_WIDTH);
    if (direction === 'RIGHT' && offset < rightBoundary) {
      setOffset(offset + OFFSET_WIDTH);
    }
    if (direction === 'LEFT' && offset > leftBoundary) {
      setOffset(offset - OFFSET_WIDTH);
    }
  };

  return (
    <div
      className={twStyles.container}
      style={{
        minWidth: `${TRACK_WIDTH_MINIMUM}px`,
        maxWidth: `${TRACK_WIDTH_MAXIMUM}px`
      }}
    >
      {/* LEFT BUTTON - Move track towards RIGHT */}
      <button
        onClick={() => moveTrack('RIGHT')}
        className={twStyles.button.left}
      >
        <div className="rotate-90">
          <Icons graphics="down" />
        </div>
      </button>

      {/* SLIDE TRACK */}
      <div className={twStyles.slider.container}>
        <div
          className={twStyles.slider.track}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {props.slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={twStyles.slider.item}
                style={{
                  width: `${SLIDE_WIDTH}px`,
                  minWidth: `${SLIDE_WIDTH}px`
                }}
              >
                {slide}
              </div>
            );
          })}
          <div
            className={twStyles.slider.end}
            style={{
              width: `${SLIDE_WIDTH * 3}px`,
              minWidth: `${SLIDE_WIDTH * 3}px`,
              opacity: `${offset !== 0 ? '1' : '0'}`
            }}
          />
        </div>
      </div>

      {/* RIGHT BUTTON - Move track towards LEFT */}
      <button
        onClick={() => moveTrack('LEFT')}
        className={twStyles.button.right}
      >
        <div className="-rotate-90">
          <Icons graphics="down" />
        </div>
      </button>
    </div>
  );
};

export default Carousel;
