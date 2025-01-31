import { ReactElement } from 'react';

export const ArrowIcon = ({ fill, className }: IProp): ReactElement => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='9.889'
    height='13.259'
    viewBox='0 0 9.889 13.259'
    className={className}
  >
    <path
      d='M3.95 0h1.963v9.548l2.61-2.611L9.889 8.3l-4.962 4.959L0 8.331l1.318-1.325 2.567 2.568.066-.035z'
      transform='rotate(180 4.944 6.63)'
      style={{ fill: fill }}
    />
  </svg>
);
interface IProp {
  fill: string;
  className?: string;
}

export default ArrowIcon;
