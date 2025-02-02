import { MobileSelectStyled } from './select.styled';
import { ISelectProps } from './types';

export const MobileSelect = ({ options, label, onChange }: ISelectProps) => {
  return (
    <MobileSelectStyled>
      {label && <span className='title'>{label}</span>}
      {options.map((o) => (
        <div
          className='row'
          onClick={() => onChange({ target: { value: o.value } })}
        >
          {o.label}
        </div>
      ))}
    </MobileSelectStyled>
  );
};
