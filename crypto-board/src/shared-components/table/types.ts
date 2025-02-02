export interface TableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  customCellRender?: React.ComponentType<{
    asset: T;
    label: string;
    key: number;
  }>;
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
