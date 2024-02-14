import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginReset from './LoginReset';
import LoginLost from './LoginLost';
import UserContext from '../../Context/UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to="conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginLost />} />
          <Route path="resetar" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
