import styled from 'styled-components';
import { Theme } from '../../theme';

export const SelectStyled = styled.select`
  display: flex;
  width: 200px;
  background-color: transparent;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  border-radius: ${Theme.effects.BORDER_RADIUS};
  padding: 10px;
  border-color: ${Theme.colors.MAIN_BLUE};

  option {
    background-color: ${Theme.colors.CARD_BG};
    color: ${Theme.colors.MAIN_FONT_COLOR};
    border: none;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .select-label {
    font-size: 12px;
    color: ${Theme.colors.MAIN_BLUE};
  }
`;
