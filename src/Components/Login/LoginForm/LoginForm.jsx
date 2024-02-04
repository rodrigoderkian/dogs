import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassWord] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username,
        password,
      },
    });
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassWord(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to={'/login/criar'}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
