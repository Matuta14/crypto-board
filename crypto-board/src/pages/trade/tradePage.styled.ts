import styled from 'styled-components';
import { Theme } from '../../theme';

export const TradePageStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      margin: 20px;
      color: ${Theme.colors.MAIN_FONT_COLOR};
    }
    .arrow-icon {
      transform: rotate(180deg);
    }
  }
`;

export const InputWithSelect = styled.div`
  display: flex;
  flex-direction: column;
  border: ${Theme.effects.BORDER_COLORED};
  padding: 20px;
  border-radius: ${Theme.effects.BORDER_RADIUS};
`;

export const ErrorText = styled.span`
display: flex;
color: ${Theme.colors.RED}
padding: 0 20px;
`;
