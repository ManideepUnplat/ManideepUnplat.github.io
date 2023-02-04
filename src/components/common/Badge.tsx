import React from 'react';

/**
 * `COMPONENT`
 * ## Badge
 * @param props Contains the following attributes: `label`,`isHighlight`, `twAddonStyles`
 * @returns `React.ReactElement`
 */
const Badge = (props: {
  label: string;
  isHighlight?: boolean;
  twAddonStyles?: {
    badge?: string;
  };
}): React.ReactElement => {
  const twStyles = {
    badge: `px-2 py-1 ${
      props.isHighlight ? 'bg-[#FF6D6B]' : 'bg-[#5655C6]'
    } rounded text-white text-xs font-semibold`
  };
  return (
    <div className={`${twStyles.badge} ${props.twAddonStyles?.badge}`}>
      {props.label}
    </div>
  );
};

export default Badge;
