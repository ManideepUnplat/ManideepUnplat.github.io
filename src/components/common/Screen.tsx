import React from 'react';

/**
 * `COMPONENT`
 * ## Screen
 * @param props Contains the following attributes: `children`, `twAddonStyles`
 * @returns `React.ReactElement`
 */
const Screen = (props: {
  children: React.ReactNode;
  twAddonStyles?: { screen?: string };
}): React.ReactElement => {
  const twStyles = {
    screen: 'min-h-screen relative bg-[#F5F5F5]'
  };
  return (
    <div className={`${twStyles.screen} ${props.twAddonStyles?.screen}`}>
      {Array.isArray(props.children)
        ? props.children.map((child) => child)
        : props.children}
    </div>
  );
};

export default Screen;
