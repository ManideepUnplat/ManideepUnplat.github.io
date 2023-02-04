import React from 'react';

/**
 * `COMPONENT`
 * ## Card
 * @param props Contains the following attributes: `children`, `twAddonStyles`
 * @returns `React.ReactElement`
 */
const Card = (props: {
  children: React.ReactNode;
  twAddonStyles?: { card?: string };
}): React.ReactElement => {
  const twStyles = {
    card: 'bg-[#FFFFFF] border border-[#C4C4C4] rounded-lg shadow-[0_6px_12px_rgba(0,0,0,0.25)]'
  };
  return (
    <div className={`${twStyles.card} ${props.twAddonStyles?.card}`}>
      {Array.isArray(props.children)
        ? props.children.map((child) => child)
        : props.children}
    </div>
  );
};

export default Card;
