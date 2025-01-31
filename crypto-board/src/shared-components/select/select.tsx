import { useState } from 'react';
import { ISelectOption, ISelectProps } from './types';
import { SelectBox, SelectMenu, SelectStyled } from './select.styled';
import useViewport from '../../hooks/useViewport';
import { BottomSheet } from '../bottomSheet/bottomSheet';

export const Select = ({
  options,
  onChange,
  label,
  value,
  className,
}: ISelectProps) => {
  const [selected, setSelected] = useState(value || options[0]?.label);
  const { isMobile } = useViewport();
  const [isOpenSelect, setIsOpen] = useState(false);

  const onOptionClick = (option: ISelectOption) => {
    setSelected(option.label);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SelectBox className={className}>
      <label className='select-label'>{label}</label>
      <SelectStyled
        value={selected}
        onClick={handleClick}
        type='text'
        placeholder='Select an option'
        readOnly
      />

      {isOpenSelect &&
        (isMobile ? (
          <BottomSheet
            isOpenSelect={isMobile ? isOpenSelect : false}
            height='20%'
            setIsOpen={setIsOpen}
          >
            <SelectMenu>
              {isOpenSelect &&
                options.map((option) => (
                  <span
                    key={option.value}
                    onClick={() => onOptionClick(option)}
                    className='option'
                  >
                    {option.label}
                  </span>
                ))}
            </SelectMenu>
          </BottomSheet>
        ) : (
          <SelectMenu>
            {options.map((option) => (
              <span
                key={option.value}
                onClick={() => onOptionClick(option)}
                className='option'
              >
                {option.label}
              </span>
            ))}
          </SelectMenu>
        ))}
    </SelectBox>
  );
};
