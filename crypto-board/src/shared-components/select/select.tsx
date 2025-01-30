import React, { useState } from 'react';
import { ISelectProps } from './types';
import { SelectBox, SelectStyled } from './select.styled';

export const Select = ({
  options,
  onChange,
  label,
  value,
  className,
}: ISelectProps) => {
  const [selected, setSelected] = useState(value || options[0]?.value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onChange?.(value);
  };

  return (
    <SelectBox className={className}>
      <label className='select-label'>{label}</label>
      <SelectStyled value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectStyled>
    </SelectBox>
  );
};
