import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../../Components/Forms/Input';
import Button from '../../../Components/Forms/Button';
import useForm from '../../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const userPassword = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.validate() && userPassword.validate()) {
      await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        username,
        password,
      });
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input
          {...userPassword}
          label="Senha"
          type="password"
          name="password"
        />
        <Button>Entrar</Button>
      </form>
      <Link to={'/login/criar'}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
