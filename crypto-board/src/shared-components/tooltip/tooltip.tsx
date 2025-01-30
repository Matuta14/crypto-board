import { TooltipStyled } from './tooltipStyled';
import { ITooltipProps } from './types';

export const Tooltip = ({ children, tooltipText, align }: ITooltipProps) => {
  return (
    <TooltipStyled align={align}>
      {tooltipText && <div className='tooltip-text'>{tooltipText}</div>}
      {children}
    </TooltipStyled>
  );
};
