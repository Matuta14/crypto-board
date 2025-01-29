import styled, { css } from 'styled-components';
import { AssetDirectionType } from '../types';
import { Theme } from '../../../theme';

export const PercentTabeCell = styled.td<{ direction?: AssetDirectionType }>`
  padding: 10px;
  width: 100px;
  display: flex;
  flex: auto;
  justify-content: end;
  align-items: center;
  gap: 10px;
  color: ${Theme.colors.GREEN};

  ${({ direction }) =>
    direction === AssetDirectionType.DOWN &&
    css`
      color: ${Theme.colors.RED};
      .arrow {
        fill: ${Theme.colors.RED};
        transform: rotate(180deg);
        margin-bottom: 4px;
      }
    `}
`;
