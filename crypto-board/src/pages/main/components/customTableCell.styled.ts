import styled, { css } from 'styled-components';
import { AssetDirectionType } from '../types';
import { Theme } from '../../../theme';

export const PercentTabeCell = styled.span<{ direction?: AssetDirectionType }>`
  padding: 10px;
  width: 100px;
  display: flex;
  flex: auto;
  justify-content: end;
  align-items: center;
  gap: 10px;
  color: ${Theme.colors.GREEN};
  overflow: hidden;
  text-overflow: ellipsis;

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
