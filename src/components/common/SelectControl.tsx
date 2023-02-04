import React from 'react';

const SelectControl = (props: {
  id: string;
  name: string;
  type: 'checkbox' | 'radio';
  isChecked?: boolean;
  onChange?: (id: string, value: any) => void;
}): React.ReactElement => {
  const twInputStyles = {
    input: 'accent-[#5655C6] h-4 w-4 cursor-pointer'
  };

  return (
    <input
      className={twInputStyles.input}
      id={props.id}
      name={props.name}
      type={props.type}
      checked={props.isChecked}
      onChange={(e: any) => {
        if (props.onChange) {
          if (props.type === 'checkbox') {
            props.onChange(props.id, e.target.checked);
          } else {
            props.onChange(props.id, undefined);
          }
        }
      }}
    />
  );
};

export default SelectControl;
