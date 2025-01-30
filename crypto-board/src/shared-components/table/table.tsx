import { Tooltip } from '../tooltip/tooltip';
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
        {columns.map(({ label, flex, align }) => {
          return (
            <TableCell className='header-cell' flex={flex} align={align}>
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
              {columns.map(({ value, flex, align, customRender, tooltip }) => {
                if (customRender && customCellRender) {
                  return customCellRender(r[value]);
                }
                return (
                  <TableCell flex={flex} align={align}>
                    <Tooltip
                      align={align || 'left'}
                      tooltipText={tooltip ? `${r[value]}` : ''}
                    >
                      <span className='hide-overflow'>
                        {r[value] as React.ReactNode}
                      </span>
                    </Tooltip>
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
