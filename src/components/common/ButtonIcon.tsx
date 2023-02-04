import React from 'react';

import Icons from './Icons';

/**
 * `COMPONENT`
 * ## Button
 * @param props Contains the following attributes: `label`, `size`, `icon`, `isRounded`, `twAddonStyles`, `onClick`
 * @returns `React.ReactElement`
 */
const ButtonIcon = (props: {
  label: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  icon: string;
  isRounded?: boolean;
  isPrimary?: boolean;
  twAddonStyles?: {
    button?: string;
  };
  onClick?: (e: any) => void;
}): React.ReactElement => {
  const twStyles = {
    size: {
      sm: 'px-6 py-1 text-xs',
      md: 'px-8 py-2 text-sm',
      lg: 'px-10 py-3 text-md',
      xl: 'px-12 py-4 text-lg'
    },
    span: 'flex gap-2',
    button: `font-semibold transition border border-[#5655c6] ${
      props.isRounded ? 'rounded-full' : 'rounded-lg'
    } ${
      props.isPrimary
        ? 'bg-[#5655c6] text-white [&>svg]:stroke-white hover:text-[#5655C6] hover:bg-[#E6E6f7] hover:[&>svg]:stroke-[#5655C6]'
        : 'bg-white text-[#5655c6] [&>svg]:stroke-[#5655C6] hover:bg-[#E6E6f7]'
    } active:bg-transparent active:text-[#5655C6]`
  };
  return (
    <button
      className={`${twStyles.size[props.size]} ${twStyles.button} ${
        props.twAddonStyles?.button
      }`}
      type="button"
      onClick={props.onClick}
    >
      <span className={twStyles.span}>
        <Icons graphics={props.icon} />
        {props.label}
      </span>
    </button>
  );
};

export default ButtonIcon;
