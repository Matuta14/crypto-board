import styled from 'styled-components';
import { Theme } from '../../theme';
import { responsive } from '../../layout/sizeConstants';

export const SelectStyled = styled.input`
  display: flex;
  background-color: transparent;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  border-radius: ${Theme.effects.BORDER_RADIUS};
  padding: 10px;
  border-color: ${Theme.colors.MAIN_BLUE};
  border: ${Theme.effects.BORDER_COLORED};
  outline: none;
  cursor: pointer;
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
  position: relative;
  width: 200px;

  .select-label {
    font-size: 12px;
    color: ${Theme.colors.MAIN_BLUE};
  }
`;

export const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${Theme.colors.CARD_BG};
  color: ${Theme.colors.MAIN_FONT_COLOR};
  border: ${Theme.effects.BORDER_COLORED};
  border-radius: ${Theme.effects.BORDER_RADIUS};
  display: flex;
  flex-direction: column;
  z-index: 100;

  .option {
    padding: 10px;
    border-radius: ${Theme.effects.BORDER_RADIUS};
    &:hover {
      background-color: ${Theme.colors.TABLE_ROW_HOVER};
      cursor: pointer;
    }
  }

  @media ${responsive.mobile} {
    padding: 20px;
    top: 0;
    border: none;
  }
`;

export const SelectMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MobileSelectStyled = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
  }
`;
