import styled from 'styled-components';
import { responsive } from '../../layout/sizeConstants';

export const TooltipStyled = styled.div<{ $align: string }>`
  width: 100%;
  text-align: center;
  position: relative;
  text-align: ${({ $align }) => $align || 'left'};
  .tooltip-text {
    position: absolute;
    bottom: 100%;
    left: 60%;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    background-color: #38464b;
    border-radius: 8px;
    font-size: 14px;
    padding: 10px;
  }
  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

  @media ${responsive.mobile} {
    display: flex;
    justify-content: end;
  }
`;
