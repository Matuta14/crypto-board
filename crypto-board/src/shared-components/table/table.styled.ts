import styled from 'styled-components';
import { Theme } from '../../theme';

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  td {
    color: ${Theme.colors.SECONDARY_FONT_COLOR};
    font-size: 20px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: ${Theme.effects.BORDER_RADIUS};
  &:hover {
    background-color: ${Theme.colors.TABLE_ROW_HOVER};
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableCell = styled.td<{ flex?: number; right?: boolean }>`
  padding: 10px;
  width: 100px;
  flex: ${({ flex }) => (flex ? flex : 'auto')};
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  color: ${Theme.colors.MAIN_FONT_COLOR};
  font-size: 22px;
`;
