import React, { useState } from 'react';
import { ISelectProps } from './types';
import { SelectBox, SelectStyled } from './select.styled';

export const Select = ({ options, onChange, label }: ISelectProps) => {
  const [selected, setSelected] = useState(options[0]?.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log('value: ', value);
    setSelected(value);
    onChange?.(value);
  };

  return (
    <SelectBox>
      <label className='select-label'>{label || 'Choose an option'}</label>
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
