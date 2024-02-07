import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../../Components/Forms/Input';
import Button from '../../../Components/Forms/Button';
import useForm from '../../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../../api';
import useLocalStorage from '../../../Hooks/useLocalStorage';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const [token, setToken] = useLocalStorage('token', '');

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const { token } = await response.json();
      setToken(token);
    }
  };

  React.useEffect(() => {
    if (token.length) {
      getUser(token);
    }
  }, []);

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
