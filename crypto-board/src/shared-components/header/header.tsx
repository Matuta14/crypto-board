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
        <Link to={'/'}>Main</Link>
        <Link to='/trade'>Trade</Link>
      </div>
    </HeaderStyled>
  );
};
