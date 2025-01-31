import { ButtonStyled } from './button.styled';
import { IButtonProps } from './types';

export const Button = ({ text, ...rest }: IButtonProps) => {
  return <ButtonStyled {...rest}>{text}</ButtonStyled>;
};
