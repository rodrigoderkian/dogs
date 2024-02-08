import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../../Components/Forms/Input';
import Button from '../../../Components/Forms/Button';
import useForm from '../../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../../api';
import useLocalStorage from '../../../Hooks/useLocalStorage';
import { UserContext } from '../../../Context/UserContext';

const LoginForm = () => {
  const { userLogin, data } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...password} label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to={'/login/criar'}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
