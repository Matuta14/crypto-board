import styled from 'styled-components';
import { Theme } from '../theme';

export const MainLayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${Theme.colors.MAIN_BG};
  flex-direction: column;
  gap: 20px;
`;

export const ContentLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  background-color: ${Theme.colors.CARD_BG};
  padding: 30px;

  border-radius: ${Theme.effects.BORDER_RADIUS};
`;
