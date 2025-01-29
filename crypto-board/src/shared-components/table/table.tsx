import {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableStyled,
} from './table.styled';
import { TableProps } from './types';

export const Table = function <T>({
  columns,
  data,
  customCellRender,
  onRowClick,
  rowSelector,
}: TableProps<T>) {
  return (
    <TableStyled>
      <TableHeader>
        {columns.map(({ label, flex, right }) => {
          return (
            <TableCell flex={flex} right={right}>
              {label}
            </TableCell>
          );
        })}
      </TableHeader>

      <TableBody>
        {data.map((r) => {
          return (
            <TableRow
              onClick={() => {
                if (onRowClick) return onRowClick(r[rowSelector]);
              }}
            >
              {columns.map(({ value, flex, right, customRender }) => {
                if (customRender && customCellRender) {
                  return customCellRender(r[value]);
                }
                return (
                  <TableCell flex={flex} right={right}>
                    {r[value]}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </TableStyled>
  );
};
