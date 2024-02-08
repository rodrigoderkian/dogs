import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginReset from './LoginReset';
import LoginLost from './LoginLost';
import UserContext from '../../Context/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (!!login) return <Navigate to="conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginLost />} />
        <Route path="resetar" element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
