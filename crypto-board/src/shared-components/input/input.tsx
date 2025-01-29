import { useState } from 'react';
import { InputStyled } from './input.styled';
import { IInputProps } from './types';

export const Input = ({ onChange, label, value }: IInputProps) => {
  const [enteredValue, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log('value: ', value);
    setValue(value);
    onChange?.(value);
  };

  return <InputStyled onChange={(e) => handleChange(e)} value={value} />;
};
