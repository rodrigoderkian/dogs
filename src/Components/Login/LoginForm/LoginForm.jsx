import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../../Components/Forms/Input';
import Button from '../../../Components/Forms/Button';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassWord] = React.useState('');
  console.log(password, username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      username,
      password,
    });
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to={'/login/criar'}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
