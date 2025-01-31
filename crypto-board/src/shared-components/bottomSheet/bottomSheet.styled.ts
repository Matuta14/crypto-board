import styled from 'styled-components';
import { Theme } from '../../theme';
import { responsive } from '../../layout/sizeConstants';
import { IBottomsheetStyledProp } from './types';

export const BottomsheetStyled = styled.div<IBottomsheetStyledProp>`
  display: flex;
  position: fixed;
  bottom: ${(props) => (props.isOpenSelect ? '0' : '-100%')};
  left: 0;
  width: 100%;
  background-color: ${Theme.colors.CARD_BG};
  height: ${({ height }) => height || '70%'};
  transition: bottom 0.3s ease-out;
  z-index: 100;
`;

export const BottomsheetBackground = styled.div<IBottomsheetStyledProp>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: RGBA(20, 22, 31, 0.7);
  transition: all 0.15s;
  opacity: 1;
  visibility: ${(props) => (props.isOpenSelect ? 'visible' : 'hidden')};
  padding: 1em;
  overflow: overlay;
  // 	zIndex &&
  // 	css
  @media ${responsive.mobile} {
    height: 100vh;
    overflow: hidden;
    /* z-index: 3; */
  }
`;
