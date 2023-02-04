import React from 'react';

/**
 * `COMPONENT`
 * ## ButtonLink
 * @param props Contains the following attributes: `label`, `size`, `twAddonStyles`, `onClick`
 * @returns `React.ReactElement`
 */
const ButtonLink = (props: {
  label: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  twAddonStyles?: {
    buttonLink?: string;
  };
  onClick?: (e: any) => void;
}): React.ReactElement => {
  const twStyles = {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl'
    },
    buttonLink: `underline transition hover:text-[#5655C6]`
  };
  return (
    <button
      className={`${twStyles.size[props.size]} ${twStyles.buttonLink} ${
        props.twAddonStyles?.buttonLink
      }`}
      type="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default ButtonLink;
