import styled from 'styled-components';
import { Theme } from '../../../theme';

export const MobileAssetTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MobileAssetBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-bottom: ${Theme.effects.BORDER_COLORED};
  .chart-button {
    align-self: end;
    color: ${Theme.colors.MAIN_BLUE};
    display: flex;
    align-items: center;
    gap: 5px;
    .arrow-icon {
      transform: rotate(90deg);
    }
  }
`;

export const MobileTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .label {
    color: ${Theme.colors.SECONDARY_FONT_COLOR};
  }
  .value {
    color: ${Theme.colors.MAIN_FONT_COLOR};
  }
`;
