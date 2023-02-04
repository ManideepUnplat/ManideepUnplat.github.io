import React from 'react';

/**
 * `COMPONENT`
 * ## Rating
 * @param props Contains the following attributes: `score`, `total`, `twAddonStyles`
 * @returns `React.ReactElement`
 */
const Rating = (props: {
  score: number;
  total: number;
  twAddonStyles?: {
    container?: string;
    dotBorder?: string;
    dotFill?: string;
  };
}): React.ReactElement => {
  const twStyles = {
    container: 'flex gap-2',
    dotBorder: 'h-4 w-4 rounded-full border border-[#5655C6] overflow-hidden',
    dotFill: 'bg-[#5655C6] h-4'
  };
  const absoluteScore = props.score * (5 / props.total);
  return (
    <div className={`${twStyles.container} ${props.twAddonStyles?.container}`}>
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`${twStyles.dotBorder} ${props.twAddonStyles?.dotBorder}`}
        >
          <div
            className={`${twStyles.dotFill} ${props.twAddonStyles?.dotFill} ${
              dot > absoluteScore
                ? dot - absoluteScore >= 1
                  ? 'w-0'
                  : 'w-1/2'
                : 'w-full'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Rating;
