export interface ISelectProps {
  options: ISelectOption[];
  onChange: Function;
  label?: string;
  value?: string;
  className?: string;
}

export interface ISelectOption {
  label: string;
  value: string | number;
}
