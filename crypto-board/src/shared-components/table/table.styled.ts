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
  background-color: ${Theme.colors.TABLE_ROW_HOVER};
  span {
    color: ${Theme.colors.SECONDARY_FONT_COLOR};
    font-size: 20px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid ${Theme.colors.MAIN_BLUE};
  &:hover {
    background-color: ${Theme.colors.TABLE_ROW_HOVER};
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableCell = styled.span<{ $flex?: number; $align?: string }>`
  padding: 10px;
  width: 100px;
  flex: ${({ $flex }) => ($flex ? $flex : 'auto')};
  color: ${Theme.colors.MAIN_FONT_COLOR};
  font-size: 18px;
  text-align: ${({ $align }) => $align};
  &:first-child {
    color: ${Theme.colors.MAIN_BLUE};
  }
  &.header-cell {
    color: ${Theme.colors.SECONDARY_FONT_COLOR};
  }
  .hide-overflow {
    text-overflow: ellipsis;
    text-align: ${({ $align }) => $align};
    overflow: hidden;
    width: 100%;
    display: block;
  }
`;

export const EmptyTableStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 22px;
  text-align: center;
  margin-top: 10%;
`;
