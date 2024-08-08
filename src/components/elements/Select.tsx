// import { DropdownIcon } from '@/utilities/DropdownIcon';
import React, { ReactNode } from 'react';
import Select from 'react-select';

export interface DropdownTypes {
  label: string;
  value: string | number | ReactNode;
}

interface SelectDropdownTypes {
  defaultValue?: any;
  onChange?: any;
  styles?: string | any;
  disabled?: boolean;
  options: { value: string | number; label: string }[];
  textTransform?: string;
  error?: string | undefined;
  icon?: number;
  leftIcon?: ReactNode;
  placeholder?: string;
  required?: boolean;
  dark: boolean;
}

const SelectDropdown = React.forwardRef(function SelectDropdown(
  {
    defaultValue,
    onChange,
    styles,
    disabled,
    options,
    textTransform,
    error,
    dark,
    icon,
    leftIcon,
    placeholder,
    required,
    ...rest
  }: SelectDropdownTypes,
  ref,
) {
  // select dropdown custom styles
  const selectCustomStyles = {
    menu: (provided: any) => ({
      ...provided,
      fontSize: '13px',
      textTransform: textTransform,
      zIndex: 100,
      backgroundColor: dark ? 'rgb(75 85 99)' : 'white',
      color: dark ? 'white' : 'black',
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: '#bdbdbd',
      fontSize: '13px',
    }),

    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      paddingLeft: leftIcon ? '32px' : '8',
      minHeight: '49px',
      fontSize: '16px !important',
      border: `1px solid ${dark ? 'gray' : 'black'}`,

      borderRadius: '8px',
      textTransform: textTransform,
      backgroundColor: 'transparent',
    }),

    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
      ...provided,
      zIndex: 100,
      fontSize: '13px',

      backgroundColor: state.isSelected
        ? '#3A3A3A'
        : state.isFocused
          ? '#e6e9f0'
          : '',

      color: state.isSelected
        ? 'white'
        : state.isFocused
          ? 'black'
          : dark
            ? 'white'
            : 'black',
    }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const color = dark ? 'white' : 'black';

      return { ...provided, opacity, transition, color };
    },
  };

  return (
    <div className="w-full">
      <div className="relative flex w-full items-center gap-2">
        {leftIcon && (
          <div className="text-dark absolute left-3 top-1/2 z-50 -translate-y-[50%] text-lg">
            {leftIcon}
          </div>
        )}
        <div className="relative flex-1">
          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={placeholder || options?.[0]?.label}
            isDisabled={disabled}
            defaultValue={defaultValue}
            onChange={onChange}
            styles={styles || selectCustomStyles}
            options={options}
            {...rest}
          />
        </div>
      </div>

      {error && <div className="ml-1 mt-2 text-xsm text-red-500">{error}</div>}
    </div>
  );
});

export default SelectDropdown;
