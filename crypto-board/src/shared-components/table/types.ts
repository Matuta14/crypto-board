import { ReactNode } from 'react';

export interface TableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  customCellRender?: Function;
  onRowClick?: Function;
  rowSelector: keyof T;
}
export interface IColumn<T> {
  label: string;
  flex?: number;
  align?: 'right' | 'left';
  customRender?: boolean;
  tooltip?: boolean;
  value: keyof T;
}
