import { Tooltip } from '../tooltip/tooltip';
import { EmptyTable } from './emptyTable';
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
        {columns.map(({ label, flex, align }, index) => {
          return (
            <TableCell
              className='header-cell'
              $flex={flex}
              $align={align}
              key={index}
            >
              {label}
            </TableCell>
          );
        })}
      </TableHeader>
      {data?.length > 0 ? (
        <TableBody>
          {data.map((r, index) => {
            return (
              <TableRow
                onClick={() => {
                  if (onRowClick) return onRowClick(r[rowSelector]);
                }}
                key={index}
              >
                {columns.map(
                  ({ value, flex, align, customRender, tooltip }, index) => {
                    if (customRender && customCellRender) {
                      const DynamicComponent = customCellRender;
                      return (
                        <DynamicComponent
                          key={index}
                          asset={r}
                          label={String(value)}
                        />
                      );
                    }
                    return (
                      <TableCell $flex={flex} $align={align} key={index}>
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
                  }
                )}
              </TableRow>
            );
          })}
        </TableBody>
      ) : (
        <EmptyTable />
      )}
    </TableStyled>
  );
};
