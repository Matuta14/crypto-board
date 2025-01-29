import styled from 'styled-components';
import { Theme } from '../../theme';

export const HeaderStyled = styled.div`
  display: flex;
  gap: 30px;
  font-size: 22px;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  padding: 2rem;
  background-color: ${Theme.colors.CARD_BG};
  a {
    text-decoration: none;
    color: ${Theme.colors.MAIN_FONT_COLOR};
  }

  .menu {
    display: flex;
    gap: 10px;
  }
`;
