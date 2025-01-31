import styled from 'styled-components';
import { Theme } from '../../theme';

export const InputStyled = styled.input`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 20px 5px;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  border-bottom: 1px solid ${Theme.colors.MAIN_BLUE};
  &:focus-visible {
    outline: none;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${Theme.colors.MAIN_BLUE};
  }
`;
