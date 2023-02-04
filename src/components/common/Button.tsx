import React from 'react';

/**
 * `COMPONENT`
 * ## Button
 * @param props Contains the following attributes: `label`, `size`, `isRounded`, `twAddonStyles`, `onClick`
 * @returns `React.ReactElement`
 */
const Button = (props: {
  label: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
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
    button: `font-semibold transition border border-[#5655c6] ${
      props.isRounded ? 'rounded-full' : 'rounded-lg'
    } ${
      props.isPrimary
        ? 'bg-[#5655c6] text-white hover:text-[#5655C6] hover:bg-[#E6E6f7]'
        : 'bg-white text-[#5655c6] hover:bg-[#E6E6f7]'
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
      {props.label}
    </button>
  );
};

export default Button;
