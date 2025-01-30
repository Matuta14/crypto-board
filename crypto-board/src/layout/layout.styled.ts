import styled from 'styled-components';
import { Theme } from '../theme';

export const MainLayoutStyled = styled.div`
  display: flex;
  background-color: ${Theme.colors.MAIN_BG};
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const ContentLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  background-color: ${Theme.colors.CARD_BG};
  padding: 30px;
  height: 100%;
  border-radius: ${Theme.effects.BORDER_RADIUS};
`;
