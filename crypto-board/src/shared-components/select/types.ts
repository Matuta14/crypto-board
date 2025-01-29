export interface ISelectProps {
  options: ISelectOption[];
  onChange: Function;
  label?: string;
}

export interface ISelectOption {
  label: string;
  value: string | number;
}
