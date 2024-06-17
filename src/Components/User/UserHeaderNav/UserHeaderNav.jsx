import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../../../Context/UserContext';
import MinhasFotos from '../../../assets/feed.svg?react';
import Estatisticas from '../../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../../assets/adicionar.svg?react';
import Sair from '../../../assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate('/login');
  };
  return (
    <nav className={styles.nav}>
      <NavLink end to="/conta">
        <MinhasFotos />
        {!!mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {!!mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {!!mobile && 'Postar'}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {!!mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
