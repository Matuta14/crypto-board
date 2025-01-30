export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
}
