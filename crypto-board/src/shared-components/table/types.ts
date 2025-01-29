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
  right?: boolean;
  customRender?: boolean;
  value: keyof T;
}
