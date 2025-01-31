import styled from 'styled-components';
import { Theme } from '../../theme';

export const ButtonStyled = styled.button`
  display: flex;
  background-color: ${Theme.colors.MAIN_BLUE};
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid ${Theme.colors.MAIN_FONT_COLOR};
  border-radius: ${Theme.effects.BORDER_RADIUS};
  font-size: 18px;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
