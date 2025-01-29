import { Link } from 'react-router-dom';
import { HeaderStyled } from './header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      {' '}
      <Link to={'/'} className='logo'>
        LOGO
      </Link>
      <div className='menu'>
        <Link to={'/'}>MAIN</Link>
        <Link to='/trade'>TRADE</Link>
      </div>
    </HeaderStyled>
  );
};
